import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import AuthContent from "../components/authContent"
import Timeline from "../components/timeline"

const StyledPageWrap = styled(PageWrap)`
  max-width: 650px;
  @media (min-width: 1170px) {
    max-width: 1100px;
  }
`

function TimelinePage(props) {
  const { awards } = props.pageContext

  return (
    <Layout>
      <SEO title="Timeline" />
      <AuthContent>
        <StyledPageWrap>
          <h1>Timeline</h1>
          <Timeline awards={awards} />
        </StyledPageWrap>
      </AuthContent>
    </Layout>
  )
}

export default TimelinePage
