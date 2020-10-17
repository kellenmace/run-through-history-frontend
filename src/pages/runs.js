import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import AuthContent from "../components/authContent"
import TotalMiles from "../components/totalMiles"
import RunsList from "../components/runsList"

const StyledPageWrap = styled(PageWrap)`
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    > div {
      width: 32%;
    }
    > a {
      width: 66%;
      p {
        height: 72px;
        line-height: 44px; /* 72px - (14px * 2) for the top & bottom padding */
        width: 100%;
        text-align: center;
        @media (min-width: 500px) {
          height: 78px;
          line-height: 50px; /* 78px - (14px * 2) for the top & bottom padding */
        }
      }
    }
  }
`

function RunsPage() {
  return (
    <Layout>
      <SEO title="Runs" />
      <StyledPageWrap>
        <AuthContent>
          <h1>Runs</h1>
          <div className="top">
            <TotalMiles />
            <Link to="/add-run">
              <p className="button">+ Add run</p>
            </Link>
          </div>
          <RunsList />
        </AuthContent>
      </StyledPageWrap>
    </Layout>
  )
}

export default RunsPage
