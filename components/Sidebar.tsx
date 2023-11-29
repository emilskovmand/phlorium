import { Box, BoxProps } from "@chakra-ui/react"

interface ISidebar extends BoxProps {

}

export const Sidebar = ({ ...rest }: ISidebar) => {

  return <Box {...rest}>

  </Box>
}