import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'

import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
