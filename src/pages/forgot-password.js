import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import SendPasswordResetEmailForm from "../components/sendPasswordResetEmailForm"

const StyledPageWrap = styled(PageWrap)`
  max-width: 500px;
`

function ForgotPasswordPage() {
  return (
    <Layout>
      <SEO title="Forgot Password" />
      <StyledPageWrap>
        <h1>Forgot your password?</h1>
        <SendPasswordResetEmailForm />
      </StyledPageWrap>
    </Layout>
  )
}

export default ForgotPasswordPage
