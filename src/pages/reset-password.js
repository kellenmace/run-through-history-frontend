import React from "react"
import styled from "styled-components"
import queryString from "query-string"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import ResetPasswordForm from "../components/resetPasswordForm"

const StyledPageWrap = styled(PageWrap)`
  max-width: 500px;
`

function ResetPasswordPage(props) {
  const { key: resetKey, login } = queryString.parse(props.location.search)

  // If reset key or login are missing, send user to Forgot Password page.
  React.useEffect(() => {
    if (!resetKey || !login) {
      navigate(`/forgot-password`)
    }
  }, [resetKey, login])

  return (
    <Layout>
      <SEO title="Reset Password" />
      <StyledPageWrap>
        <h1>Reset Password</h1>
        <ResetPasswordForm resetKey={resetKey} login={login} />
      </StyledPageWrap>
    </Layout>
  )
}

export default ResetPasswordPage
