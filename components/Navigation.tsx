import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react"
import { PhoriumIcon } from "./icons/icons"
import { SearchBar } from "./inputs/SearchBar"

interface INavigation extends FlexProps {

}

export const Navigation = ({ ...rest }: INavigation) => {

  return <Flex
    bg={useColorModeValue('white.900', 'black.900')}
    color={useColorModeValue('gray.600', 'white.900')}
    minH={'87px'}
    px="2.5"
    justifyContent={"stretch"}
    borderBottomWidth={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('black.300', 'white.300')}
    {...rest}
  >
    <Flex columnGap={"30px"} w={"full"} justifyItems={"flex-start"}>
      <Flex alignItems={"center"} justifyContent={"flex-start"} flex={"1"}>
        <PhoriumIcon h="34px" w="167px" />
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"} flex="1" >
        <SearchBar h="55px" />
      </Flex>
      <Flex flex="1">

      </Flex>
    </Flex>
  </Flex>
}