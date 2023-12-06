'use client'
import { Box, Flex, Heading, chakra } from "@chakra-ui/react"
import { SubmitForm } from "./SubmitForm"

interface ISubmitWrapper {

}

export const Submitwrapper = ({ }: ISubmitWrapper) => {

  return <chakra.main ml={"8"} p="8" bgColor="brand.700" _dark={{ bgColor: "whiteAlpha.200" }} borderRadius={"16px"} mr="30%" mt="8" maxW="100%">
    <Box mb="3">
      <Heading fontSize={"24px"} fontWeight={"semibold"}>Create a post</Heading>
    </Box>
    <Flex w="full" flexDir={"row"}>
      <SubmitForm />
    </Flex>
  </chakra.main>
}