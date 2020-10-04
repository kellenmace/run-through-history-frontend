import React from "react"
import styled from "styled-components"

import useTotalMiles from "../hooks/useTotalMiles"

const Container = styled.div`
  background-color: var(--color-grey-8);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  text-align: center;
  h3 {
    margin: 0;
    line-height: 1.7rem;
    margin-bottom: 8px;
    font-size: 20px;
    @media (min-width: 375px) {
      font-size: 25px;
    }
  }
  p {
    margin: 0;
    font-size: 0.75rem;
    line-height: 0.75rem;
  }
`

function TotalMiles() {
  const { totalMiles } = useTotalMiles()

  return (
    <Container>
      <h3>{totalMiles ? totalMiles.toLocaleString() : `...`}</h3>
      <p>total miles</p>
    </Container>
  )
}

export default TotalMiles
