import styled from "styled-components"

const withStyledIcon = icon => {
  return styled(icon)`
    color: black;
    width: 4rem;
    &:hover {
      color: #66ff00;
      transition: linear 0.2s;
      transform: scale(1.2);
    }
  `
}
export default withStyledIcon
