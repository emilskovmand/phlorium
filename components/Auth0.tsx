import { Divider, HStack, Text, VStack } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import { CustomButton } from "./Button"
import { FacebookIcon, GoogleIcon } from "./icons/icons"

export const Auth0 = () => {

  const handleClick = () => {
    signIn("google")
  }

  return <VStack gap="4" mt="3" alignItems={"stretch"}>
    <HStack>
      <Divider />
      <Text px="10px">Or</Text>
      <Divider />
    </HStack>
    <HStack gap="12">
      <CustomButton py="6" px="3" variant="transparent" onClick={handleClick} icon={<GoogleIcon />} >
        Google
      </CustomButton>
      <CustomButton py="6" px="3" variant="transparent" icon={<FacebookIcon />} >
        Facebook
      </CustomButton>
    </HStack>
  </VStack>
}