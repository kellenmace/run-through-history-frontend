import React, { useState } from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"

import GraphQLError from "./graphqlError"
import { states } from "../services/utilities"

const REGISTER_USER = gql`
  mutation registerUser(
    $clientMutationId: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $city: String!
    $state: StateEnum!
    $sex: UserSexEnum!
    $dateOfBirth: String!
  ) {
    registerUser(
      input: {
        clientMutationId: $clientMutationId
        username: $email
        email: $email
        firstName: $firstName
        lastName: $lastName
        city: $city
        state: $state
        sex: $sex
        dateOfBirth: $dateOfBirth
      }
    ) {
      user {
        databaseId
      }
    }
  }
`

const StyledForm = styled.form`
  label {
    display: block;
  }
  label + label,
  .field-group + label,
  label + .field-group {
    margin-top: 1rem;
  }
  input,
  select {
    width: 100%;
  }
  .field-group {
    display: flex;
  }
  .field-group > label:last-of-type {
    margin-top: 0;
    margin-left: 0.5rem;
  }
  .location-fields > label:first-of-type {
    flex: 2.5;
  }
  .location-fields > label:last-of-type {
    flex: 1;
  }
  .error-wrap {
    margin-top: 1.5rem;
  }
  button {
    margin-top: 1.5rem;
  }
`

function SignUpForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    sex: "FEMALE",
    dateOfBirth: "",
  }
  const [signUpDetails, setSignUpDetails] = useState(initialState)
  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER)
  const wasSignUpSuccessful = !!data?.registerUser
  const haveServerErrorMessage = !!error?.message

  const setStateValue = e =>
    setSignUpDetails({ ...signUpDetails, state: e.target.value })

  const handleSubmit = event => {
    event.preventDefault()

    registerUser({
      variables: { clientMutationId: uuidv4(), ...signUpDetails },
    })
  }

  if (wasSignUpSuccessful) {
    return (
      <p>
        Check your email – an account confirmation link has been sent to you.
      </p>
    )
  }

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <div className="field-group name-fields">
          <label>
            First name
            <input
              type="text"
              value={signUpDetails.firstName}
              onChange={e =>
                setSignUpDetails({
                  ...signUpDetails,
                  firstName: e.target.value,
                })
              }
              autoComplete="given-name"
              required
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              value={signUpDetails.lastName}
              onChange={e =>
                setSignUpDetails({ ...signUpDetails, lastName: e.target.value })
              }
              autoComplete="family-name"
              required
            />
          </label>
        </div>
        <label>
          Email
          <input
            type="email"
            value={signUpDetails.email}
            onChange={e =>
              setSignUpDetails({ ...signUpDetails, email: e.target.value })
            }
            autoComplete="username"
            required
          />
        </label>
        <div className="field-group location-fields">
          <label>
            City
            <input
              type="text"
              value={signUpDetails.city}
              onChange={e =>
                setSignUpDetails({ ...signUpDetails, city: e.target.value })
              }
              autoComplete="address-level2"
              required
            />
          </label>
          <label>
            State
            <select
              value={signUpDetails.state}
              onBlur={setStateValue}
              onChange={setStateValue}
              autoComplete="address-level1"
              required
            >
              <option value="" aria-label="Select state"></option>
              {states.map(state => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p>Sex</p>
        <label>
          <input
            type="radio"
            value="FEMALE"
            checked={signUpDetails.sex === "FEMALE"}
            onChange={e =>
              setSignUpDetails({ ...signUpDetails, sex: e.target.value })
            }
            required
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="MALE"
            checked={signUpDetails.sex === "MALE"}
            onChange={e =>
              setSignUpDetails({ ...signUpDetails, sex: e.target.value })
            }
            required
          />
          Male
        </label>
        <label>
          Date of birth
          <input
            type="date"
            value={signUpDetails.dateOfBirth}
            onChange={e =>
              setSignUpDetails({
                ...signUpDetails,
                dateOfBirth: e.target.value,
              })
            }
            autoComplete="bday"
            required
          />
        </label>
        {haveServerErrorMessage &&
          (error.message.includes(`This username is already registered`) ? (
            <div className="error-wrap">
              <p>
                You're already signed up! <Link to="/sign-in">Sign in</Link>
              </p>
            </div>
          ) : (
            <div className="error-wrap">
              <GraphQLError message={error.message} />
            </div>
          ))}
        <button type="submit" disabled={loading}>
          {loading ? `Signing up...` : `Sign up`}
        </button>
      </fieldset>
    </StyledForm>
  )
}

export default SignUpForm
