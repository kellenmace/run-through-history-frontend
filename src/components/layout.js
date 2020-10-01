import React from "react"

import useAuth from "../hooks/useAuth"
import GlobalStyles from "./globalStyles"
import Header from "./header"
import FixedNav from "./fixedNav"

function Layout({ children }) {
  const { signedIn } = useAuth()

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      {signedIn && <FixedNav />}
    </>
  )
}

export default Layout
