import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import {
  Container,
  VStack,
  Heading,
  HStack,
  Button,
  Text,
  Link,
} from '@chakra-ui/react'
import Layout from '../components/Layout.tsx'

function IndexPage() {
  const { data: session } = useSession()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (session) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [session])

  return (
    <Layout title="Explore the Library World">
      <Container maxW="1440px">
        <VStack h="100vh" justifyContent="center" w="full">
          <Heading textTransform="uppercase" fontWeight={700} color="blue.900">
            {' '}
            Welcome to Book Library
          </Heading>
          <Text>We have more than 9000+ books records.</Text>
          <HStack>
            {isAuthenticated ? (
              <Button
                href="/search"
                as={Link}
                variant="solid"
                colorScheme="blue"
              >
                {' '}
                Explore
              </Button>
            ) : (
              <Button
                href="/auth/signin"
                as={Link}
                variant="solid"
                colorScheme="blue"
              >
                {' '}
                Login
              </Button>
            )}
          </HStack>
        </VStack>
      </Container>
    </Layout>
  )
}

export default IndexPage
