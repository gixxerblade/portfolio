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
  </StyledDiv>
)
export default Navbar

const StyledDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  line-height: 2em;
  color: white;
  font-family: "Roboto Mono", monospace;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);

  .navlink {
    text-decoration: none;
    background-color: transparent;
    color: white;
    font-weight: 600;
    font-size: 3vh;
    text-transform: uppercase;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    margin-top: 4em;
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
