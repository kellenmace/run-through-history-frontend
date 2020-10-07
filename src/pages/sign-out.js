import React, { useEffect } from "react"
import styled from "styled-components"

import useAuth from "../hooks/useAuth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import Emoji from "../components/emoji"

const StyledPageWrap = styled(PageWrap)`
  max-width: 500px;
`

function SignOutPage() {
  const { deleteAuthData } = useAuth()

  useEffect(() => {
    deleteAuthData()
  }, [deleteAuthData])

  return (
    <Layout>
      <SEO title="Sign Out" />
      <StyledPageWrap>
        <h1>
          Catch ya later <Emoji symbol="✌🏼" label="Peace sign" />
        </h1>
        <p>You have signed out.</p>
      </StyledPageWrap>
    </Layout>
  )
}

export default SignOutPage
