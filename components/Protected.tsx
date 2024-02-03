import { useSession } from 'next-auth/react'
import { ReactNode, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'

function ProtectedComponent({ children }: { children: ReactNode }) {
  const { status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return <Box w="full">{children}</Box>
}

export default ProtectedComponent
