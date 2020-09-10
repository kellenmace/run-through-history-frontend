import React from "react"
import styled from "styled-components"

import HeaderBranding from "./headerBranding"
import HeaderNav from "./headerNav"

const StyledHeader = styled.header`
  background-color: var(--color-grey-10);
  .wrap {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem var(--content-padding);
    max-width: var(--content-max-width);
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 700px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .nav-container {
    min-width: 150px;
    @media (min-width: 700px) {
      min-width: 175px;
    }
  }
`

function Header() {
  return (
    <StyledHeader>
      <div className="wrap">
        <div className="logo-container">
          <HeaderBranding />
        </div>
        <div className="nav-container">
          <HeaderNav />
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
