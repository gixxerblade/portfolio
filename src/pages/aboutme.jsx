import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
const AboutMe = () => {
  return (
    <Layout>
      <StyledDiv>
        <p>
          I am retired from the United States Marine Corps and live in North
          Carolina. I have a bachelor's degree in Information Technology and
          have completed{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://www.vetswhocode.io">
            Vets Who Code
          </a>
          &nbsp;bootcamp. I am an avid cyclist and like to get my hands dirty in
          the garden. I have created a small business where I make gourmet
          pickles named <a href="https://www.angrypickles.com">Angry Pickles</a>
          .
        </p>
      </StyledDiv>
    </Layout>
  )
}
export default AboutMe
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
