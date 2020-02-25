import React from "react"
import { Router } from "@reach/router"
import Home from "./home"
import AboutMe from "./aboutme"
import Projects from "./projects"
import Contact from "./contact"
import NotFoundPage from "./404"

export default () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <AboutMe path="aboutme" />
        <Projects path="projects" />
        <Contact path="contact" />
        <NotFoundPage default />
      </Router>
    </>
  )
}
