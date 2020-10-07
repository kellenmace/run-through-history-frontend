import React from "react"
import styled from "styled-components"

import Miles from "./miles"
// import DeleteRunButton from "./deleteRunButton"

const StyledLi = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  background-color: var(--color-grey-10);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-2);
  @media (min-width: 350px) {
    font-size: 1.2rem;
  }
  p {
    flex: 1;
    margin: 0;
  }
  p:first-of-type {
    &:before {
      font-size: 1.4rem;
      line-height: 0;
      margin-right: 3px;
      content: "• ";
      color: var(--color-yellow-6);
    }
  }
  p:last-of-type {
    text-align: right;
  }
`

const formatDate = date => new Date(date).toLocaleDateString()

function Run(props) {
  const {
    run: {
      id,
      runFields: { date, miles },
    },
  } = props

  return (
    <StyledLi>
      {/* <DeleteRunButton id={id} /> */}
      <p>{formatDate(date)}</p>
      <Miles miles={miles} />
    </StyledLi>
  )
}

export default Run
