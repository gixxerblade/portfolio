import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
/* roboto-mono-regular - latin */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-mono-v7-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Roboto Mono'), local('RobotoMono-Regular'),
       url('./roboto-mono-v7-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('./roboto-mono-v7-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('./roboto-mono-v7-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('./roboto-mono-v7-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('./roboto-mono-v7-latin-regular.svg#RobotoMono') format('svg'); /* Legacy iOS */
}
`
