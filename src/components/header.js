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

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `black`,
        marginBottom: `0rem`,
        height: "10em",
      }}
    >
      <StyledHeadDiv
        style={{
          margin: `0 auto`,
          maxWidth: "100%",
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <StyledH1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
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
          </StyledNav>
        </StyledH1>{" "}
        <Burger />
      </StyledHeadDiv>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeadDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  align-items: flex-end;
`
const StyledH1 = styled.h1`
  text-align: right;
  margin: 0;
  font-family: "Roboto Mono", monospace;
`
const StyledNav = styled.nav`
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`
const StyledGithub = styled(Github)`
  color: white;
  width: 1em;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
`
const StyledMailSend = styled(MailSend)`
  color: white;
  width: 1em;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
`
const StyledLinkedIn = styled(LinkedinSquare)`
  color: white;
  width: 1em;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
`
const StyledDevTo = styled(DevTo)`
  color: white;
  width: 1em;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
`
const StyledTwitter = styled(Twitter)`
  color: white;
  width: 1em;
  &:hover {
    color: #66ff00;
    transform: scale(1.2);
  }
`
