import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, Image, Flex} from '@chakra-ui/react'
import theme from '@/styles/theme'


export default function Document() {

  return (
    <Html lang="es">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        
        
        { }
        
      
        <NextScript />
      </body>
    </Html>
  )
}
