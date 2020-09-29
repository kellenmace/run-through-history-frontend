import React from "react"
import styled from "styled-components"

const StyledFieldset = styled.fieldset`
  legend {
    font-size: 0.75rem;
  }
  .inputs {
    display: flex;
  }
  label {
    margin: 0;
    flex: 1;
    padding: 10px 0.3rem;
    font-weight: 700;
    text-align: center;
    color: var(--color-grey-7);
    background-color: var(--color-grey-10);
    border: 2px solid var(--color-grey-8);
    border-right: 0;
    &:first-of-type {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-of-type {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      border-right: 2px solid var(--color-grey-8);
    }
  }
  /* Label for the selected input */
  input:checked + label {
    color: var(--color-grey-5);
    background-color: var(--color-grey-8);
    border-color: var(--color-grey-7);
    border-right: 2px solid var(--color-grey-7);
  }
  /* Label for the next input after the selected one */
  input:checked + label + input + label {
    border-left: 0;
  }
  /* Label for the input in focus */
  input:focus + label {
    border-color: var(--color-yellow-6);
  }
`

function HorizontalRadios({ children }) {
  return <StyledFieldset>{children}</StyledFieldset>
}

export default HorizontalRadios
