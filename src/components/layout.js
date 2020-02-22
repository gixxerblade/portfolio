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
import "./layout.css"
import StyledFullBackground from "./fullbackground"
import styled from "styled-components"
import { Link } from "gatsby"
import OpenProvider from "./openContext"

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
    <>
      <OpenProvider>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: "100%",
          }}
        >
            <Navbar />
            <StyledFullBackground>
            <main>{children}</main>
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
    </>
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
