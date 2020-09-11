import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageWrap from "../components/pageWrap"
import AuthContent from "../components/authContent"

function RunsPage() {
  return (
    <Layout>
      <SEO title="Runs" />
      <PageWrap>
        <h1>Runs</h1>
        <AuthContent>
          <p>If you can see this content, then you're signed in!</p>
        </AuthContent>
      </PageWrap>
    </Layout>
  )
}

export default RunsPage
