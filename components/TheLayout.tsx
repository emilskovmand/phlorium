'use client'
import { Box, Flex, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { Navigation } from "./Navigation"
import { Sidebar } from "./Sidebar"

interface ITheLayout {
  children: React.ReactNode
}

export const Thelayout = ({ children }: ITheLayout) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const navigationHeight = "87px"

  return <Box h="100vh" bgColor={useColorModeValue('white.900', 'black.900')}>
    <Navigation minH={navigationHeight} />
    <Flex display={"flex"} style={{ height: `calc(100vh - ${navigationHeight})` }} alignItems={"stretch"}>
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} flex={isSidebarOpen ? "22" : "1"} borderRightColor={useColorModeValue('black.300', 'white.300')} borderRightWidth={1} borderRightStyle={"solid"} />
      <Box overflowY="auto" minW={0} flex="78" >
        {children}
      </Box>
    </Flex>
  </Box>
}