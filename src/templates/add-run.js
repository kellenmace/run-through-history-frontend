import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import AuthContent from "../components/authContent"
import AddRunForm from "../components/addRunForm"

const StyledPageWrap = styled(PageWrap)`
  max-width: 500px;
`

function AddRunPage(props) {
  const { awards } = props.pageContext

  return (
    <Layout>
      <SEO title="Add Run" />
      <AuthContent>
        <StyledPageWrap>
          <h1>Add Run</h1>
          <AddRunForm awards={awards} />
        </StyledPageWrap>
      </AuthContent>
    </Layout>
  )
}

export default AddRunPage
