import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../styles/global.css"
const Navbar = () => (
  <StyledDiv>
    <Link className="navlink" to="/">
      Home
    </Link>
    <Link className="navlink" to="aboutme">
      About Me
    </Link>
    <Link className="navlink" to="projects">
      Projects
    </Link>
    <Link className="navlink" to="contact">
      Hire Me
    </Link>
    <hr />
  </StyledDiv>
)
export default Navbar

const StyledDiv = styled.div`
  background-color: black;
  line-height: 2em;
  color: white;
  font-family: "Roboto Mono", monospace;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  .navlink {
    text-decoration: none;
    background-color: transparent;
    color: white;
    font-weight: 600;
    font-size: 3vh;
    text-transform: uppercase;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }
  .navlink::before,
  .navlink::after {
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
    -webkit-transition: transform 0.3s, opacity 0.2s;
  }
  .navlink::before {
    margin-right: 10px;
    content: "[";
    transform: translateX(20px);
    -webkit-transform: translateX(20px);
  }
  .navlink::after {
    margin-left: 10px;
    content: "]";
    transform: translateX(-20px);
    -webkit-transform: translateX(-20px);
  }
  .navlink:hover::before,
  .navlink:hover::after,
  .navlink:focus::before,
  .navlink:focus::after {
    opacity: 1;
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
  }
`
