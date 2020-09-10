import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Logo from "./logo"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-yellow-1);
  display: flex;
  .gatsby-image-wrapper {
    height: 40px;
    width: 40px;
    @media (min-width: 700px) {
      height: 55px;
      width: 55px;
    }
  }
  h1 {
    display: none;
    font-size: 1rem;
    margin-left: 20px;
    line-height: 25px;
    @media (min-width: 700px) {
      display: block;
    }
  }
`

function HeaderBranding() {
  return (
    <StyledLink to="/">
      <Logo />
      <h1>Run Through History</h1>
    </StyledLink>
  )
}

export default HeaderBranding
