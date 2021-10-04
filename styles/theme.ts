import { extendTheme, ThemeExtension } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      "200": "#FFBA08",
      "500": "#FFBA08"
    },
    blue: {
      "100": "#F5F8FA",
      "800": "#47585B",
    },
    gray: {
      "200": "#DADADA",
      "400": "#999999",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'blue.100',
        color: 'blue.800'
      }   
    }
  }
})