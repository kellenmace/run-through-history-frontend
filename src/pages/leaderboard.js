import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import AuthContent from "../components/authContent"
import LeaderboardSwitcher from "../components/leaderboardSwitcher"
import Leaderboard from "../components/leaderboard"

const StyledPageWrap = styled(PageWrap)`
  .switcher-container {
    margin-bottom: 2rem;
  }
`

const views = {
  myAgeGroup: `myAgeGroup`,
  female: `female`,
  male: `male`,
}

function LeaderboardPage() {
  const [view, setView] = useState(views.myAgeGroup)

  return (
    <Layout>
      <SEO title="Runs" />
      <AuthContent>
        <StyledPageWrap>
          <h1>Leaderboard</h1>
          <div className="switcher-container">
            <LeaderboardSwitcher views={views} view={view} setView={setView} />
          </div>
          <Leaderboard views={views} view={view} />
        </StyledPageWrap>
      </AuthContent>
    </Layout>
  )
}

export default LeaderboardPage
