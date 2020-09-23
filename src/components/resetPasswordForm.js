import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import { useToasts } from "react-toast-notifications"

import useAuth from "../hooks/useAuth"
import ErrorMessage from "./errorMessage"
import GraphQLError from "./graphqlError"
import { LOG_IN } from "./signInForm"

const RESET_PASSWORD = gql`
  mutation resetUserPassword(
    $clientMutationId: String!
    $key: String!
    $login: String!
    $password: String!
  ) {
    resetUserPassword(
      input: {
        clientMutationId: $clientMutationId
        key: $key
        login: $login
        password: $password
      }
    ) {
      user {
        databaseId
      }
    }
  }
`

const StyledForm = styled.form`
  input {
    width: 100%;
  }
  button {
    margin-top: 1.5rem;
  }
  .error-wrap {
    margin-top: 1.5rem;
  }
`

function ResetPasswordForm(props) {
  const { resetKey: key, login } = props
  const { setAuthData, deleteAuthData } = useAuth()
  const { addToast } = useToasts()
  const [password, setPassword] = useState(``)
  const [passwordConfirm, setPasswordConfirm] = useState(``)
  const [clientErrorMessage, setClientErrorMessage] = useState(``)
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD)
  const wasPasswordReset = !!data?.resetUserPassword
  const haveGraphQLError = !!error?.message
  const [logIn] = useMutation(LOG_IN)
  const [attemptedLogin, setAttemptedLogin] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const isValid = validate()

    if (!isValid) return

    setAttemptedLogin(false)
    resetPassword({
      variables: {
        clientMutationId: uuidv4(),
        key,
        login,
        password,
      },
    })
  }

  function validate() {
    setClientErrorMessage(``)

    const isPasswordLongEnough = password.length >= 5
    if (!isPasswordLongEnough) {
      setClientErrorMessage(`Password must be at least 5 characters.`)
      return false
    }

    const doPasswordsMatch = password === passwordConfirm
    if (!doPasswordsMatch) {
      setClientErrorMessage(`Passwords must match.`)
      return false
    }

    return true
  }

  // If password was reset, sign user in and send them to the Runs page.
  useEffect(() => {
    if (!wasPasswordReset || attemptedLogin) return
    setAttemptedLogin(true)
    deleteAuthData() // Clear out old auth data, if present.
    logIn({
      variables: {
        clientMutationId: uuidv4(),
        username: login,
        password,
      },
    })
      .then(response => {
        const { authToken, refreshToken, user } = response.data.login
        setAuthData({ authToken, refreshToken, user })
        addToast(`New password set`, { appearance: "success" })
        navigate(`/runs`)
      })
      .catch(() => {
        setClientErrorMessage(
          `An error occurred when trying to log in with your new password. Please try again.`
        )
      })
  }, [
    wasPasswordReset,
    attemptedLogin,
    deleteAuthData,
    logIn,
    login,
    password,
    setAuthData,
    addToast,
  ])

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="new-password">
          Password
          <input
            id="new-password"
            type="password"
            value={password}
            autoComplete="new-password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password-confirm">
          Confirm Password
          <input
            id="password-confirm"
            type="password"
            value={passwordConfirm}
            autoComplete="new-password"
            onChange={e => setPasswordConfirm(e.target.value)}
            required
          />
        </label>
        {clientErrorMessage && (
          <div className="error-wrap">
            <ErrorMessage message={clientErrorMessage} />
          </div>
        )}
        {haveGraphQLError && (
          <div className="error-wrap">
            <GraphQLError message={error.message} />
          </div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? `Saving...` : `Save password`}
        </button>
      </fieldset>
    </StyledForm>
  )
}

export default ResetPasswordForm
