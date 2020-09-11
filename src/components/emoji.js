import React from "react"
import styled from "styled-components"

const StyledSpan = styled.span`
  font-style: normal;
`

function Emoji({ symbol, label }) {
  return (
    <StyledSpan
      className="emoji"
      role="img"
      aria-label={label || ``}
      aria-hidden={label ? `false` : `true`}
    >
      {symbol}
    </StyledSpan>
  )
}

export default Emoji
