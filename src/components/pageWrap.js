import styled from "styled-components"

const PageWrap = styled.div`
  margin: 2rem auto var(--fixed-nav-offset);
  padding-left: var(--content-padding);
  padding-right: var(--content-padding);
  max-width: 600px;
  @media (min-width: 600px) {
    margin-top: 4rem;
  }
`

export default PageWrap
