import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"

import useAuth from "../hooks/useAuth"
import ErrorMessage from "./errorMessage"

export const LOG_IN = gql`
  mutation logIn(
    $clientMutationId: String!
    $username: String!
    $password: String!
  ) {
    login(
      input: {
        clientMutationId: $clientMutationId
        username: $username
        password: $password
      }
    ) {
      authToken
      refreshToken
      user {
        databaseId
        firstName
        lastName
        sex
        ageGroup
      }
    }
  }
`

const StyledForm = styled.form`
  label {
    display: block;
  }
  label + label {
    margin-top: 1rem;
  }
  input {
    width: 100%;
  }
  button {
    margin-top: 1.5rem;
  }
  .forgot {
    display: block;
    font-size: 0.6rem;
  }
  .error-wrap {
    margin-top: 1.5rem;
  }
`

function SignInForm() {
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const { setAuthData } = useAuth()
  const [logIn, { loading, error, data }] = useMutation(LOG_IN)
  const errorMessage = error?.message || ``
  const isEmailValid =
    !errorMessage.includes(`empty_email`) &&
    !errorMessage.includes(`empty_username`) &&
    !errorMessage.includes(`invalid_email`) &&
    !errorMessage.includes(`invalid_username`)
  const isPasswordValid =
    !errorMessage.includes(`empty_password`) &&
    !errorMessage.includes(`incorrect_password`)

  const handleSubmit = e => {
    e.preventDefault()
    logIn({
      variables: {
        clientMutationId: uuidv4(),
        username: email,
        password,
      },
    })
  }

  // Set auth data on successful sign in.
  useEffect(() => {
    const wasLogInSuccessful = !!data?.login
    if (!wasLogInSuccessful) return
    const { authToken, refreshToken, user } = data.login
    setAuthData({ authToken, refreshToken, user })
  }, [data, setAuthData])

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="sign-in-email">
          Email
          <input
            id="sign-in-email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="sign-in-password">
          Password
          <input
            id="sign-in-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <Link to={`/forgot-password`} className="forgot">
          Forgot your password?
        </Link>
        {!isEmailValid && (
          <div className="error-wrap">
            <ErrorMessage message="Invalid email. Please try again." />
          </div>
        )}
        {!isPasswordValid && (
          <div className="error-wrap">
            <ErrorMessage message="Invalid password. Please try again." />
          </div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? `Signing in...` : `Sign in`}
        </button>
      </fieldset>
    </StyledForm>
  )
}

export default SignInForm
