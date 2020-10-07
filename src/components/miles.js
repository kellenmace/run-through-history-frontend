import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  font-weight: 700;
  color: var(--color-grey-4);
  .unit {
    font-weight: 500;
    color: var(--color-grey-7);
  }
`

function Miles(props) {
  const { miles } = props

  return (
    <StyledParagraph>
      {miles.toLocaleString()} <span className="unit">mi</span>
    </StyledParagraph>
  )
}

export default Miles
