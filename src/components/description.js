import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import LogoWithText from "./logoWithText"

const Container = styled.section`
  padding: 4rem var(--content-padding);
  background-color: #e8e6e1;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23b8b2a7' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  > div {
    max-width: 700px;
    margin: 0 auto;
    background-color: var(--color-grey-9);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-10);
    padding: 3rem 1rem;
    @media (min-width: 700px) {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  .logo-container {
    margin-bottom: 2rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  .link-container {
    text-align: center;
  }
`

function Description() {
  return (
    <Container>
      <div>
        <div className="logo-container">
          <LogoWithText />
        </div>
        <p>
          Run Through History is a year-long virtual race that begins on January
          1st, 2021. Starting on that date, runners will be able to log into our
          app and record the their runs. Each mile you run represents one
          calendar year. So if a few weeks go by and you’ve logged a total of 65
          miles, you will have traveled from year 1 AD to 65 AD, uncovering
          historical milestones along the way and earning badges and medals!
        </p>
        <div className="link-container">
          <Link to="/sign-up" className="button">
            Sign up
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Description
