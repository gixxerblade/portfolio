import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
const AboutMe = () => {
  return (
    <Layout>
      <Container>
        <StyledDiv>
          <StyledP>
            I am retired from the United States Marine Corps and live in North
            Carolina. I have a bachelor's of science in Information Technology
            and have completed&nbsp;
            <A
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.vetswhocode.io"
            >
              Vets Who Code
            </A>
            ,&nbsp;a web development training program (Bootcamp). I am an avid
            cyclist and like to get my hands dirty in the garden. I have created
            a small business where I make gourmet pickles named&nbsp;
            <A href="https://www.angrypickles.com">Angry Pickles</A>.
          </StyledP>
        </StyledDiv>
      </Container>
    </Layout>
  )
}
export default AboutMe
const StyledDiv = styled.div`
  height: 30vh;
  border-radius: 1em;
  width: 65%;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition: 0.3s linear;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  &:hover {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: 50vh;
    width: 100%;
    margin-top: 0;
    justify-content: flex-start;
  }
`
const StyledP = styled.p`
  width: 85%;
  font-size: 1.3rem;
  text-align: justify;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
    margin: 1rem;
  }
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`
const A = styled.a`
  color: #f5fcc1;
  &:hover {
    transition: 0.2s linear;
    color: #bae5e5;
    font-size: 1.34rem;
  }
`
