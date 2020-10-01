import React from "react"
import styled from "styled-components"

import useHasMounted from "../hooks/useHasMounted"
import NavLink from "./navLink"
import HomeIcon from "./homeIcon"
import RunnerIcon from "./runnerIcon"
import HistoryIcon from "./historyIcon"
import ClipboardIcon from "./clipboardIcon"

const StyledNav = styled.nav`
  background-color: var(--color-grey-9);
  border-top: 1px solid var(--color-grey-8);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    max-width: 800px;
    margin: 0 auto;
  }
  li {
    flex: 1;
    list-style: none;
  }
`

function FixedNav() {
  const hasMounted = useHasMounted()
  const pathname = hasMounted ? window.location.pathname : ""
  const isHomeActive = pathname === `/`
  const isRunsActive = [`/runs`, `/add-run`].includes(pathname)
  const isTimelineActive = [`/timeline`, `/awards`].includes(pathname)
  const isLeaderboardActive = pathname === `/leaderboard`

  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/" isActive={isHomeActive}>
            <HomeIcon />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/runs" isActive={isRunsActive}>
            <RunnerIcon />
            <p>Runs</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" isActive={isTimelineActive}>
            <HistoryIcon />
            <p>Timeline</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" isActive={isLeaderboardActive}>
            <ClipboardIcon />
            <p>Leaderboard</p>
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

export default FixedNav
