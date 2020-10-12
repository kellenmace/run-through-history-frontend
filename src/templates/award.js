import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import AuthContent from "../components/authContent"

const StyledPageWrap = styled(PageWrap)`
  max-width: 700px;
  .award {
    padding: 2rem;
    @media (min-width: 600px) {
      padding: 4rem;
    }
    background-color: var(--color-grey-10);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-10);
  }
  h1 {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`

function AwardPage(props) {
  const {
    pageContext: {
      award: { title, content, featuredImage },
    },
  } = props
  const imageUrl = featuredImage?.sourceUrl || ``
  const imageAltText = featuredImage?.altText || ``

  return (
    <Layout>
      <SEO title="Add Run" />
      <AuthContent>
        <StyledPageWrap>
          <div className="award">
            <h1>{title ? parse(title) : "Award"}</h1>
            <img src={imageUrl} alt={imageAltText} />
            {parse(content)}
          </div>
        </StyledPageWrap>
      </AuthContent>
    </Layout>
  )
}

export default AwardPage
