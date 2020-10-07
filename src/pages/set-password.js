import React, { useEffect } from "react"
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
  const { key: resetKey, login, new_account: newAccount } = queryString.parse(
    props.location.search
  )
  const pageTitle = newAccount ? `Set Password` : `Reset Password`

  // If reset key or login are missing, send user to Forgot Password page.
  useEffect(() => {
    if (!resetKey || !login) {
      navigate(`/forgot-password`)
    }
  }, [resetKey, login])

  return (
    <Layout>
      <SEO title={pageTitle} />
      <StyledPageWrap>
        <h1>{pageTitle}</h1>
        <ResetPasswordForm resetKey={resetKey} login={login} />
      </StyledPageWrap>
    </Layout>
  )
}

export default ResetPasswordPage
