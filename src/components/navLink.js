import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const SERVICE_WORKER_UPDATE_FOUND = "rthServiceWorkerUpdateFound"

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0.3rem;
  background-color: ${props =>
    props.$isActive ? `var(--color-grey-8)` : `var(--color-grey-9)`};
  @media (min-width: 800px) {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }
  svg {
    height: 26px;
    width: auto;
  }
  p {
    margin: 0;
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
`

function NavLink({ children, isActive, ...props }) {
  // If service worker has found an update, trigger
  // page reload on route change.
  function handleClick(event) {
    if (window[SERVICE_WORKER_UPDATE_FOUND] === true) {
      event.preventDefault()
      window.location.href = props.to
    }
  }

  return (
    <StyledLink $isActive={isActive} {...props} onClick={handleClick}>
      {children}
    </StyledLink>
  )
}

export default NavLink
