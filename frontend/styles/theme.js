import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export default extendTheme({
  initialColorMode: 'system',
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      '::-webkit-scrollbar': {
        width: '10px'
      },
      '::-webkit-scrollbar-track': {
        background: mode('gray.50', 'gray.800')(props),
      },
      '::-webkit-scrollbar-thumb': {
        background: mode('gray.400', 'gray.600')(props),
        borderRadius: '10px'
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: mode('gray.500', 'gray.500')(props)
      },
    })
  }
})
