import React from 'react'
import PropTypes from 'prop-types'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import 'react-toastify/dist/ReactToastify.css'
import './global.css'

function MyApp({ Component, pageProps }) {
  const { session, ...pagePropsWithoutSession } = pageProps

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pagePropsWithoutSession} />
      </ChakraProvider>
    </SessionProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    session: PropTypes.object,
  }).isRequired,
}

export default MyApp
