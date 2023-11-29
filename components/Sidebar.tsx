import { Box, BoxProps, useDisclosure } from "@chakra-ui/react"

interface ISidebar extends BoxProps {

}

export const Sidebar = ({ ...rest }: ISidebar) => {
  const { } = useDisclosure()

  return <Box {...rest}>

  </Box>
}