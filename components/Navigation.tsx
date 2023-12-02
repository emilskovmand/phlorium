import { Flex, FlexProps, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { CustomButton } from "./Button"
import { DecalMenu } from "./DecalMenu"
import { PhoriumIcon } from "./icons/icons"
import { SearchBar } from "./inputs/SearchBar"
import { SignupModal } from "./modals/Signup"

interface INavigation extends FlexProps {

}

export const Navigation = ({ ...rest }: INavigation) => {

  const signupDisclosure = useDisclosure()

  return <>
    <Flex
      bg={useColorModeValue('white.900', 'black.900')}
      color={useColorModeValue('gray.600', 'white.900')}
      px="2.5"
      justifyContent={"stretch"}
      borderBottomWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('black.300', 'white.300')}
      {...rest}
    >
      <Flex columnGap={"30px"} w={"full"} justifyItems={"flex-start"}>
        <Flex alignItems={"center"} gap="54" justifyContent={"flex-start"} flex={"1"}>
          <PhoriumIcon h="34px" w="167px" />
          <DecalMenu />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} flex="1" >
          <SearchBar h="55px" />
        </Flex>
        <Flex flex="1" alignItems={"center"} justifyContent={"flex-end"}>
          <Flex gap="7" alignItems={"center"}>
            <CustomButton linkTo="/login" p="0" h="50px" borderRadius={"24px"} justifyContent={"center"} variant={"ghost"}>Sign in</CustomButton>
            <CustomButton linkTo="/register" px="6" h="50px" borderRadius={"24px"} justifyContent={"center"} variant={"primary"}>Sign up</CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>

    <SignupModal disclosure={signupDisclosure} />
  </>
}