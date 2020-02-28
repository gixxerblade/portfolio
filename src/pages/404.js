import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="not-found-wrapper">
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <div className="not-found-text">
          <p>
            You just hit a route that doesn&#39;t exist...
            <span className="sadface" role="img" aria-label="sad">
              😪
            </span>
          </p>
          <p>
            Go back to the <Link to="/">Home</Link> page
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
