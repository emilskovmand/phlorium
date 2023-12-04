import { Box, Flex, FlexProps, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { BellIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { CustomButton } from "./Button"
import { DecalMenu } from "./DecalMenu"
import { PhoriumIcon } from "./icons/icons"
import { SearchBar } from "./inputs/SearchBar"
import { SignupModal } from "./modals/Signup"

interface INavigation extends FlexProps {

}

export const Navigation = ({ ...rest }: INavigation) => {
  const { data } = useSession()

  const isAuthenticated = !!data?.user

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
          <Link href="/">
            <PhoriumIcon h="34px" w="167px" />
          </Link>
          <DecalMenu />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} flex="1" >
          <SearchBar h="55px" />
        </Flex>
        <Flex flex="1" alignItems={"center"} justifyContent={"flex-end"}>
          {!isAuthenticated && <>
            <Flex gap="7" alignItems={"center"}>
              <CustomButton linkTo="/login" p="0" h="50px" borderRadius={"24px"} justifyContent={"center"} variant={"ghost"}>Sign in</CustomButton>
              <CustomButton linkTo="/register" px="6" h="50px" borderRadius={"24px"} justifyContent={"center"} variant={"primary"}>Sign up</CustomButton>
            </Flex>
          </>}
          {isAuthenticated && <>
            <Flex gap="3" alignItems={"center"}>
              <BellIcon height="28px" width="28px" />
              <Link href="/submit">
                <PlusCircleIcon cursor={"pointer"} height="28px" width="28px" />
              </Link>
              <Box
                height="40px"
                width="40px"
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                bgImage={"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"}
                borderRadius={"50px"}
              />
            </Flex>
          </>}
        </Flex>
      </Flex>
    </Flex>

    <SignupModal disclosure={signupDisclosure} />
  </>
}