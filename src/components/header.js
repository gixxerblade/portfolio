import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Github } from "styled-icons/boxicons-logos/Github"
import { MailSend } from "styled-icons/boxicons-regular/MailSend"
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare"
import { DevTo } from "styled-icons/boxicons-logos/DevTo"
import { Twitter } from "styled-icons/fa-brands/Twitter"
import Burger from "./burger"
import "../styles/header.css"
const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <StyledHeadDiv>
        <StyledH1>
          <StyledH1Link to="/">{siteTitle}</StyledH1Link>
        </StyledH1>
        <StyledNav>
          <a href="mailto:sdclarkie@gmail.com">
            <StyledMailSend />
          </a>
          <a href="https://github.com/gixxerblade">
            <StyledGithub />
          </a>
          <a href="https://www.linkedin.com/in/stephen-clark-5319406/">
            <StyledLinkedIn />
          </a>
          <a href="https://twitter.com/gixxerblade">
            <StyledTwitter />
          </a>
          <a href="https://dev.to/gixxerblade">
            <StyledDevTo />
          </a>
          <Burger />
        </StyledNav>
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
    align-self:flex-start;
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

const StyledNav = styled.nav`
  width: 19rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    
    justify-content: space-between;
  }
`
const StyledGithub = styled(Github)`
  color: white;
  width: 2.5vw;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
  @media screen and (min-width: 320px) {
    width: calc(30px + 6 * ((100vw - 320px) / 680));
  }
`
const StyledMailSend = styled(MailSend)`
  color: white;
  width: 2.5vw;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
  @media screen and (min-width: 320px) {
    width: calc(30px + 6 * ((100vw - 320px) / 680));
  }
`
const StyledLinkedIn = styled(LinkedinSquare)`
  color: white;
  width: 2.5vw;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
  @media screen and (min-width: 320px) {
    width: calc(30px + 6 * ((100vw - 320px) / 680));
  }
`
const StyledDevTo = styled(DevTo)`
  color: white;
  width: 2.5vw;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
  @media screen and (min-width: 320px) {
    width: calc(30px + 6 * ((100vw - 320px) / 680));
  }
`
const StyledTwitter = styled(Twitter)`
  color: white;
  width: 2.5vw;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
  @media screen and (min-width: 320px) {
    width: calc(30px + 6 * ((100vw - 320px) / 680));
  }
`
