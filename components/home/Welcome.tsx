import { Box, Heading } from "@chakra-ui/react"
import { useSession } from "next-auth/react"

export const Welcome = () => {
  const { data } = useSession()

  return <Box>
    <Heading fontSize={"32px"} fontWeight={"semibold"}>Welcome {(data?.user as any)?.username || ''}</Heading>
  </Box>
}