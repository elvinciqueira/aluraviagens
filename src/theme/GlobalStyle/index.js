import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${normalize}

  html, body {
    font-family: ${({theme}) => theme.fontFamily};
    background-color: ${({theme}) => theme.colors.primary.main.color};
    min-height: 100vh;
    width: 100%;
  }

  #__next {
    flex: 1;
    display: flex;
  }
`

export default GlobalStyle
