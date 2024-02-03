import React, { useCallback } from 'react'
import { Box, Container, Flex, Heading, Button } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

type LayoutProps = {
  title: string
  children: React.ReactNode
}

function Layout({ title, children }: LayoutProps) {
  const { data: session } = useSession()
  const router = useRouter()
  const handleLogout = useCallback(() => {
    router.push('/')
    signOut()
  }, [router])

  return (
    <Container maxW="1440px">
      <Flex bg="teal.900" p={5} justify="space-between" alignItems="center">
        <Heading color="white" fontSize="2xl" fontWeight="bold">
          {title}
        </Heading>

        {session && (
          <Button onClick={handleLogout} variant="solid" colorScheme="red">
            {' '}
            Logout
          </Button>
        )}
      </Flex>
      <Box p={5}>{children}</Box>
    </Container>
  )
}

export default Layout
