import React from "react"

import GlobalStyles from "./globalStyles"
import Header from "./header"

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
