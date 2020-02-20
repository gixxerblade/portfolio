import React from "react"
import { Router } from "@reach/router"
import SEO from "../components/seo"
import Home from "./home"
import AboutMe from "./aboutme"
import Projects from "./projects"
import Contact from "./contact"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Router>
      <Home path="/" />
      <AboutMe path="aboutme" />
      <Projects path="projects" />
      <Contact path="contact" />
    </Router>
  </>
)

export default IndexPage
