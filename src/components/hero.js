import React from "react"
import styled from "styled-components"

import HallBackgroundImage from "./hallBackgroundImage"

const Container = styled.section`
  color: var(--color-grey-10);
  text-align: center;
  .text-container {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    padding: 12rem 1rem;
  }
  h2 {
    margin: 0;
    color: var(--color-gray-10);
  }
`

function Hero() {
  return (
    <Container>
      <HallBackgroundImage>
        <div className="text-container">
          <h2>
            Run through the ages, earning rewards as you uncover history's
            milestones.
          </h2>
        </div>
      </HallBackgroundImage>
    </Container>
  )
}

export default Hero
