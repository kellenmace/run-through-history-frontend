import React from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"

import Emoji from "./emoji"
import GraphqlError from "./graphqlError"

const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation sendPasswordResetEmail(
    $clientMutationId: String!
    $username: String!
  ) {
    sendPasswordResetEmail(
      input: { clientMutationId: $clientMutationId, username: $username }
    ) {
      user {
        databaseId
      }
    }
  }
`

const StyledDiv = styled.div`
  display: flex;
  > div:first-of-type {
    width: 60px;
  }
  p {
    margin: 0;
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

function SendPasswordResetEmailForm() {
  const [email, setEmail] = React.useState(``)
  const [sendPasswordResetEmail, { loading, error, data }] = useMutation(
    SEND_PASSWORD_RESET_EMAIL
  )
  const wasEmailSent = !!data?.sendPasswordResetEmail
  const haveGraphQLError = !!error?.message

  function handleSubmit(event) {
    event.preventDefault()
    if (!email) return

    sendPasswordResetEmail({
      variables: {
        clientMutationId: uuidv4(),
        username: email,
      },
    })
  }

  if (wasEmailSent) {
    return (
      <StyledDiv>
        <div>
          <Emoji symbol="✅" label="Check mark" />
        </div>
        <div>
          <p>Check your email – a password reset link has been sent to you.</p>
        </div>
      </StyledDiv>
    )
  }

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <p>
        Enter the email associated with your account and you'll be sent a link
        to reset your password.
      </p>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="password-reset-email">
          Email
          <input
            id="password-reset-email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        {haveGraphQLError && (
          <div className="error-wrap">
            <GraphqlError message={error.message} />
          </div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? `Sending...` : `Send password reset email`}
        </button>
      </fieldset>
    </StyledForm>
  )
}

export default SendPasswordResetEmailForm
