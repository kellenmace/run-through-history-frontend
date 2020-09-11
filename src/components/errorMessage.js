import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  background: var(--color-grey-10);
  border-left: 4px solid var(--color-red-6);
  padding: 1rem;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  box-shadow: var(--box-shadow-2);
  p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--color-red-6);
  }
`

function ErrorMessage({ message }) {
  return (
    <StyledDiv>
      <p>{message}</p>
    </StyledDiv>
  )
}

export default ErrorMessage
