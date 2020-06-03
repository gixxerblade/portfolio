import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
const AboutMe = () => {
  return (
    <Layout>
      <Container>
        <StyledDiv>
          <StyledP>
            I’m a product focused Javascript developer and entrepreneur based in
            North Carolina. After my tenure with Marine Corps, I shifted focus
            to the technology sector and obtained a Bachelors of Science in
            Information Technology. Not one to leave anything to chance, along
            with the passion to become the best version of me, I signed up for a
            program named{" "}
            <A
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.vetswhocode.io"
            >
              Vets Who Code
            </A>
            . I went through their course work to learn not only how to become a
            better programmer but to actually understand the craft of building
            products for the web with a{" "}
            <span style={{ textDecoration: "underline" }}>team</span>. When I
            was not learning I focused on building a company named{" "}
            <A
              href="https://www.angrypickles.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angry Pickles.
            </A>
            . I am proud to have built a product from scratch that actually
            provides revenue and makes people happy. When I am not building,
            learning or making pickles, I am an avid Cyclist and Gardener.
          </StyledP>
        </StyledDiv>
      </Container>
    </Layout>
  )
}
export default AboutMe
const StyledDiv = styled.div`
  height: auto;
  border-radius: 1em;
  width: 65%;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition: 0.3s linear;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  &:hover {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: 50vh;
    width: 100%;
    margin-top: 0;
    justify-content: flex-start;
    border-radius: 0em;
  }
`
const StyledP = styled.p`
  width: 85%;
  font-size: auto;
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
  }
`
