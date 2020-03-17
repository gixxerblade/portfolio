import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Burger from "./burger"
import "../styles/header.css"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import DesktopNavbar from "./desktop-navbar"
const Header = ({ siteTitle }) => {
  const size = useMediaQuery('(max-width:812px)')

  return (
    <StyledHeader>
      <StyledHeadDiv>
        <StyledH1>
          <StyledH1Link to="/">{siteTitle}</StyledH1Link>
        </StyledH1>
        {size && <Burger />}
        {!size && <DesktopNavbar />}
      </StyledHeadDiv>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Stephen Clark`,
}

export default Header

const StyledHeader = styled.header`
  background: #000;
  margin-bottom: 0rem;
  height: 8em;
  width: 100%;
`

const StyledHeadDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0;
  }
`
const StyledH1 = styled.h1`
  width: 100%;
  position: relative;
  top: 1rem;
  text-align: left;
  font-family: "Roboto Mono", monospace;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    text-align: center;
    align-self: flex-start;
  }
`
const StyledH1Link = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
    cursor: pointer;
  }
`

