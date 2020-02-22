import React, { useContext } from "react"
import { OpenContext } from "./openContext"
import { StyledBurger } from "./burger.styled"

const Burger = () => {
  const [open, setOpen] = useContext(OpenContext)
  return (
    <>
      <StyledBurger onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}
export default Burger
