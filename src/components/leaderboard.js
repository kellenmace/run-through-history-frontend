import React from "react"
import styled from "styled-components"

import useAuth from "../hooks/useAuth"
import useLeaderboard from "../hooks/useLeaderboard"
import LeaderboardRow from "./leaderboardRow"

const Container = styled.div`
  .age-group {
    margin-bottom: 2rem;
  }
  h2 {
    margin-top: 3rem;
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

function Leaderboard({ views, view }) {
  const { user } = useAuth()
  const isMyAgeGroupView = view === views.myAgeGroup
  const sex = isMyAgeGroupView ? user.sex : view
  const ageGroup = isMyAgeGroupView ? user.ageGroup : null
  const { leaderboard, loading, error } = useLeaderboard({ sex, ageGroup })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Sorry, an error has occurred. Please reload the page.</p>
  }

  if (!leaderboard.length) {
    const phrase = isMyAgeGroupView ? `Get` : `Y'all get`
    return <p>{`No results yet. ${phrase} out there and run some miles!`}</p>
  }

  return (
    <Container>
      {leaderboard.map(leaderboardAgeGroup => {
        const { ageGroup, label, runners } = leaderboardAgeGroup

        return (
          <div key={ageGroup} className="age-group">
            <h2>{label}</h2>
            <ul>
              {runners.map(runner => (
                <LeaderboardRow key={runner.databaseId} runner={runner} />
              ))}
            </ul>
          </div>
        )
      })}
    </Container>
  )
}

export default Leaderboard
