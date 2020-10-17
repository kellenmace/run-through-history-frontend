import React from "react"
import styled from "styled-components"

import Miles from "./miles"

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-3);
  background-color: var(--color-grey-10);
  margin-bottom: 8px;
  .person {
    flex: 2.2;
  }
  h3 {
    margin: 0;
    font-size: 1rem;
    @media (min-width: 500px) {
      font-size: 1.3rem;
    }
  }
  .city-state {
    margin: 0;
    color: var(--color-grey-7);
    text-transform: uppercase;
    letter-spacing: 0.3px;
    font-weight: 800;
    font-size: 9px;
    @media (min-width: 500px) {
      font-size: 0.6rem;
    }
  }
  .miles {
    flex: 1;
    text-align: right;
  }
  .unit {
    font-weight: 500;
    color: var(--color-grey-7);
  }
`

function LeaderboardRow(props) {
  const {
    runner: {
      databaseId,
      firstName,
      lastName,
      userFields: { city, state, totalMiles },
    },
  } = props

  return (
    <StyledLi key={databaseId} className="runner">
      <div className="person">
        <h3>{`${firstName} ${lastName}`}</h3>
        <p className="city-state">{`${city}, ${state}`}</p>
      </div>
      <div className="miles">
        <Miles miles={totalMiles} />
      </div>
    </StyledLi>
  )
}

export default LeaderboardRow
