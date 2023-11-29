import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react"

interface INavigation extends FlexProps {

}

export const Navigation = ({ ...rest }: INavigation) => {

  return <Flex
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')}
    minH={'86px'}
    py={4}
    px={'10px'}
    borderBottomWidth={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('black.300', 'black.300')}
    align={'center'}
    {...rest}
  >

  </Flex>
}