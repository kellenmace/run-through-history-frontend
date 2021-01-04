import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Description from "../components/description"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Run Through History" />
      <Hero />
      <Description />
    </Layout>
  )
}

export default IndexPage
