'use client'
import { Box, Flex, Heading, chakra } from "@chakra-ui/react"
import { SubmitForm } from "./SubmitForm"

interface ISubmitWrapper {

}

export const Submitwrapper = ({ }: ISubmitWrapper) => {

  return <chakra.main pl={"8"} pr="30%" pt="8" maxW="100%">
    <Box mb="3">
      <Heading fontSize={"24px"} fontWeight={"semibold"}>Create a post</Heading>
    </Box>
    <Flex w="full" flexDir={"row"}>
      <SubmitForm />
    </Flex>
  </chakra.main>
}