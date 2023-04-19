import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '@/styles/theme'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <h1>Sportify</h1>
        <h2><b>Ciudad deportiva</b></h2>
        <NextScript />
      </body>
    </Html>
  )
}
