import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import PageWrap from "./pageWrap"
import SignInForm from "./signInForm"

const StyledPageWrap = styled(PageWrap)`
  max-width: 500px;
  form {
    margin-bottom: 2rem;
  }
  .sign-up-message {
    font-size: 0.65rem;
  }
`

function SignIn() {
  return (
    <StyledPageWrap>
      <h1>Sign In</h1>
      <SignInForm />
      <p className="sign-up-message">
        Don't have an account yet? <Link to="/sign-up">Sign up</Link>
      </p>
    </StyledPageWrap>
  )
}

export default SignIn
