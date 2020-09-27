import React, { useEffect } from "react"
import { navigate, Link } from "gatsby"
import styled from "styled-components"

import useAuth from "../hooks/useAuth"
import Layout from "../components/layout"
import PageWrap from "../components/pageWrap"
import SEO from "../components/seo"
import SignUpForm from "../components/signUpForm"

const StyledPageWrap = styled(PageWrap)`
  max-width: 500px;
  .sign-in-message {
    margin-top: 2rem;
    font-size: 0.65rem;
  }
`

function SignUpPage() {
  const { signedIn } = useAuth()

  useEffect(() => {
    if (signedIn) {
      navigate(`/runs`)
    }
  }, [signedIn])

  return (
    <Layout>
      <SEO title="Sign Up" />
      <StyledPageWrap>
        <h1>Sign Up</h1>
        <SignUpForm />
        <p className="sign-in-message">
          Already have an account? <Link to={`/sign-in`}>Sign in</Link>
        </p>
      </StyledPageWrap>
    </Layout>
  )
}

export default SignUpPage
