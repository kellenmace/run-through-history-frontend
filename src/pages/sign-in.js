import React, { useEffect } from "react"
import { navigate } from "gatsby"

import useAuth from "../hooks/useAuth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignIn from "../components/signIn"

function SignInPage() {
  const { signedIn } = useAuth()

  useEffect(() => {
    if (signedIn) {
      navigate(`/runs`)
    }
  }, [signedIn])

  return (
    <>
      <Layout>
        <SEO title="Sign In" />
        <SignIn />
      </Layout>
    </>
  )
}

export default SignInPage
