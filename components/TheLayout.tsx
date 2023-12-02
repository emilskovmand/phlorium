'use client'
import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import { Navigation } from "./Navigation"
import { Sidebar } from "./Sidebar"

interface ITheLayout {
  children: React.ReactNode
}

export const Thelayout = ({ children }: ITheLayout) => {

  const navigationHeight = "87px"

  return <Box h="100vh" bgColor={useColorModeValue('white.900', 'black.900')}>
    <Navigation minH={navigationHeight} />
    <Flex display={"flex"} style={{ height: `calc(100vh - ${navigationHeight})` }} alignItems={"stretch"}>
      <Sidebar flex="22" borderRightColor={useColorModeValue('black.300', 'white.300')} borderRightWidth={1} borderRightStyle={"solid"} />
      <Box minW={0} flex="78" >
        {children}
      </Box>
    </Flex>
  </Box>
}