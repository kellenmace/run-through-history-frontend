import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.nav`
  text-align: right;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    flex: 1;
    list-style: none;
  }
  a {
    display: block;
    line-height: 40px;
    font-size: 0.8rem;
    @media (min-width: 700px) {
      line-height: 55px;
    }
  }
  p {
    margin: 0;
  }
`

function HeaderNav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default HeaderNav
