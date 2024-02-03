'use client'

import { ChakraProvider, theme } from '@chakra-ui/react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
