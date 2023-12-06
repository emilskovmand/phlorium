'use client'
import { Box, Divider, Flex, HStack, Heading, Text, VStack, chakra } from "@chakra-ui/react"
import { SubmitForm } from "./SubmitForm"

interface ISubmitWrapper {

}

const guidelines: string[] = [
  "Behave like you would in real life.",
  "Look for the source of your content.",
  "Search for duplicates of your post."
]

export const Submitwrapper = ({ }: ISubmitWrapper) => {

  return <HStack ml={"8"} mr="20%" gap="8" mt="8" alignItems={"flex-start"}>
    <chakra.main flex="7" minW="0px" p="8" bgColor="brand.700" _dark={{ bgColor: "whiteAlpha.200" }} borderRadius={"16px"} maxW="100%">
      <Box mb="3">
        <Heading fontSize={"24px"} fontWeight={"semibold"}>Create a post</Heading>
      </Box>
      <Flex w="full" flexDir={"row"}>
        <SubmitForm />
      </Flex>
    </chakra.main>
    <VStack alignItems={"flex-start"} minW="0px" flex="2" p="6" bgColor="brand.700" _dark={{ bgColor: "whiteAlpha.200" }} borderRadius={"6px"}>
      <Heading fontSize={"18px"}>Guidelines</Heading>
      {guidelines.map((v, i) => {
        return <>
          <Divider />
          <Text>{i + 1}. <Text pl="1" display={"inline"}>{v}</Text></Text>
        </>
      })}
    </VStack>
  </HStack>
}