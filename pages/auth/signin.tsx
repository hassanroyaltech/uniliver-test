import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useSession, signIn } from 'next-auth/react'
import {
  Container,
  VStack,
  Heading,
  Button,
  Text,
  FormControl,
  Input,
  Box,
  Divider,
} from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import Layout from '../../components/Layout.tsx'

function SignIn() {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const { data: session } = useSession()
  const notifyToast = toast
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    setIsLoading(true)
    signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    }).then((res) => {
      setIsLoading(false)
      if (res?.ok) {
        // Redirect to home page
      } else {
        notifyToast.error('Invalid credentials')
      }
    })
  }

  if (session) {
    router.push('/search')
    return null
  }

  return (
    <Layout title="Login">
      <VStack w="full" bg="white.300">
        <Container maxW="1440px">
          <VStack h="100vh" justifyContent="center" w="full">
            <Box
              w={500}
              shadow="md"
              borderRadius={20}
              p={15}
              position="relative"
            >
              <Heading color="blue.800" my={2} textAlign="center">
                SignIn
              </Heading>
              <Divider border="1px solid #eee" mb={3} />
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <Text fontWeight={500} mb={1}>
                    Username
                  </Text>
                  <Input
                    {...register('username')}
                    type="text"
                    required
                    placeholder="John Doe"
                  />
                </FormControl>
                <FormControl my={5}>
                  <Text fontWeight={500} mb={1}>
                    {' '}
                    Password
                  </Text>
                  <Input
                    {...register('password')}
                    type="password"
                    required
                    placeholder="******"
                  />
                </FormControl>
                {/*  */}
                <Button
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  isLoading={isLoading}
                >
                  Sign In
                </Button>
                <ToastContainer />
              </form>
            </Box>
          </VStack>
        </Container>
      </VStack>
    </Layout>
  )
}

export default SignIn
