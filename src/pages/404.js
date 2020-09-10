import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import LostTouristImage from "../components/lostTouristImage"

const StyledPageWrap = styled(PageWrap)`
  .image-container {
    margin: 2rem 0;
    border-bottom: 3px solid var(--color-grey-8);
  }
  .gatsby-image-wrapper {
    max-width: 225px;
    margin: 0 auto;
  }
`

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <StyledPageWrap>
        <h1>Not Found</h1>
        <div className="image-container">
          <LostTouristImage />
        </div>
        <p>This page isn't on the timeline.</p>
      </StyledPageWrap>
    </Layout>
  )
}

export default NotFoundPage
