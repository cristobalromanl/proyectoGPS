import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'FIFA Welcome';
        font-style: normal;
        font-weight: normal;
        src: url('./fonts/FIFAWelcome.ttf') format('truetype');
      }
      `}
  />
)

export default Fonts