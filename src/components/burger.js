import React, { useContext } from "react"
import { OpenContext } from "./openContext"
//import styled from "styled-components"
import "./burger.css"
//import { StyledBurger } from "./burger.styled"
const Burger = () => {
  const [opened, setOpened] = useContext(OpenContext)
  return (
    <>
      <button
        className={`burger ${opened ? 'active' : ''}`}
        onClick={() => setOpened(!opened)}
      >
        <div />
        <div />
        <div />
      </button>
    </>
  )
}
export default Burger

/* const StyledBurger = styled.button`
  position: absolute;
  align-self: inherit;
  top: 13.6%;
  right: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    div:first-child {
      transform: ${({ opened }) => (opened ? "rotate(45deg)" : "rotate(0)")};
    }

    div:nth-child(2) {
      opacity: ${({ opened }) => (opened ? "0" : "1")};
      transform: ${({ opened }) =>
        opened ? "translateX(20px)" : "translateX(0)"};
    }

    div:nth-child(3) {
      transform: ${({ opened }) => (opened ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
 */
