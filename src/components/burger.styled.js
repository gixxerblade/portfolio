import styled, { css } from "styled-components"

export const StyledBurger = styled.button`
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

    :first-child {
      ${({ open }) =>
        open
          ? css`
              transform: rotate(45deg);
            `
          : css`
              transform: rotate(0);
            `};
    }

    :nth-child(2) {
      opacity: ${({ open }) =>
        open
          ? css`
              opacity: 0;
            `
          : css`
              opacity: 1;
            `};
      transform: ${({ open }) =>
        open
          ? css`
              transform: translateX(20px);
            `
          : css`
              transform: translateX(0);
            `};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open
          ? css`
              transform: rotate(-45deg);
            `
          : css`
              transform: rotate(0);
            `};
    }
  }
`
