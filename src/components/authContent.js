import React from "react"

import useAuth from "../hooks/useAuth"
import SignInPage from "../components/signIn"

function AuthContent({ children }) {
  const { signedIn } = useAuth()

  if (!signedIn) {
    return <SignInPage />
  }

  return children
}

export default AuthContent
