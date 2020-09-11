import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import useAuth from "../hooks/useAuth"

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
  const { signedIn } = useAuth()

  return (
    <StyledNav>
      <ul>
        {!signedIn ? (
          <>
            <li>
              <Link to="/sign-in">
                <p>Sign In</p>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <p>Sign Up</p>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/sign-out">
              <p>Sign Out</p>
            </Link>
          </li>
        )}
      </ul>
    </StyledNav>
  )
}

export default HeaderNav
