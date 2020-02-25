import React from "react"
import Layout from "../components/layout"
import Typed from "react-typed"
import { Link } from "@reach/router"
import "../styles/global.css"
import SEO from "../components/seo"
const Home = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <div className="frontpagewrapper">
        <h2 className="hi">Hi! Welcome to my site.</h2>
        <Typed
          className="typedString"
          strings={[
            "I am Stephen Clark...",
            "I am a JavaScript Developer...",
            "I am a Marine Corps Veteran",
          ]}
          typeSpeed={70}
          backSpeed={80}
          smartBackspace
          loop
        />
        <Link className="letstalk" to="contact">
          Let's Talk...
        </Link>
      </div>
    </Layout>
  </>
)
export default Home
