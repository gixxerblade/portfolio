import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { AlternateEmail } from "styled-icons/material/AlternateEmail"
import { Github } from "styled-icons/boxicons-logos/Github"
import withStyledIcon from "../components/withStyledIcon"
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare"
import { DevTo } from "styled-icons/boxicons-logos/DevTo"
import { Twitter } from "styled-icons/fa-brands/Twitter"
import { Link } from "gatsby"
const Contact = () => {
  const StyledEmailIcon = withStyledIcon(AlternateEmail)
  const StyledGithubIcon = withStyledIcon(Github)
  const StyledLinkedIn = withStyledIcon(LinkedinSquare)
  const StyledDevTo = withStyledIcon(DevTo)
  const StyledTwitter = withStyledIcon(Twitter)
  return (
    <Layout>
      <StyledDiv>
        <h1>Contact</h1>
        <StyledIconUL>
          <li>
            <Link to="mailto:sdclarkie@gmail.com">
              <StyledEmailIcon title="Email" />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/gixxerblade">
              <StyledGithubIcon title="GitHub" />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/stephen-clark-5319406/">
              <StyledLinkedIn title="LinkedIn" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/gixxerblade">
              <StyledTwitter title="Twitter" />
            </Link>
          </li>
          <li>
            <Link to="https://dev.to/gixxerblade">
              <StyledDevTo title="DevTo" />
            </Link>
          </li>
        </StyledIconUL>
      </StyledDiv>
    </Layout>
  )
}
export default Contact

const StyledDiv = styled.div`
  height: 100vh;
  width: 65%;
  font-size: 1.3rem;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 2vw;
  align-items: center;
  justify-content: flex-start;
`

const StyledIconUL = styled.ul`
  list-style-type: none;
  width: 50%;
  text-align: center;
`
