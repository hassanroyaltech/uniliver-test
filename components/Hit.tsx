import { HStack, Divider, Image, Text, Box } from '@chakra-ui/react'
import { Books } from '../interfaces'

function Hit({ hit }: { hit: Books }) {
  const { title, authors, image_url, publication_year } = hit

  return (
    <>
      <HStack alignItems="center" justifyContent="start" borderBottom="md">
        <Image
          src={image_url}
          alt={title}
          width={50}
          height={50}
          borderRadius="full"
        />
        <Box>
          <Text fontSize={20} fontWeight={600}>
            {title}
          </Text>
          {authors.map((author: string) => {
            return (
              <Text fontSize={14} fontWeight={600} color="grey">
                {author}
              </Text>
            )
          })}
          <Text fontSize={14} fontWeight={600} color="grey">
            {publication_year}
          </Text>
        </Box>
      </HStack>
      <Divider border="1px solid #ccc" />
    </>
  )
}

export default Hit
