/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Header from "./header"
import "../styles/layout.css"
import StyledFullBackground from "./fullbackground"
import styled from "styled-components"
import { Link } from "gatsby"
import OpenProvider from "./openContext"
//import GlobalFonts from "../fonts/fonts"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayoutDiv>
      <OpenProvider>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <Navbar />
          <StyledFullBackground>
           {children}
          </StyledFullBackground>
          <StyledFooter>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              © {new Date().getFullYear()} {data.site.siteMetadata.title}
            </Link>
          </StyledFooter>
        </div>
      </OpenProvider>
    </StyledLayoutDiv>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const StyledFooter = styled.footer`
  color: white;
  background: black;
  font-family: "Roboto Mono", monospace;
`
const StyledLayoutDiv = styled.div`
    overflow-x: hidden;
  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow-x: hidden;
  }
`
