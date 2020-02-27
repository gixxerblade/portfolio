import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="not-found-wrapper">
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p className="not-found-text">
        You just hit a route that doesn&#39;t exist...
        <span className="sadface" role="img" aria-label="sad">
          😪
        </span>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
