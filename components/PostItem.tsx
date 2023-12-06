import { IPost } from "@/interfaces/post.interface";
import { IUser } from "@/interfaces/user.interface";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const PostDecal = ({ decal }: { decal?: string }) => {

  return <Box px="2" py="1" borderRadius={"12px"} bgColor="white.900" _dark={{ bgColor: "black.300" }}>
    decal/{decal}
  </Box>
}

export const PostItem = ({ title, text, user }: IPost) => {

  const postedBy = user as IUser

  return <VStack
    gap="0px"
    alignItems={"flex-start"}
    borderRadius={"16px"}
    w="100%"
    minW="0"
    p="8"
    bgColor="brand.700"
    _dark={{ bgColor: "whiteAlpha.200" }}
    justifyContent={"flex-start"}
  >
    <Box>
      <Text>{postedBy.username} &#x2022; 1 min ago</Text>
    </Box>
    <Box py="4" maxH="100px">
      <Heading fontSize="28px" fontWeight={"medium"} mb="2">{title}</Heading>
      <Text fontSize="14px" noOfLines={2}>{text}</Text>
    </Box>
    <HStack>
      <PostDecal decal="Coding" />
      <PostDecal decal="Gaming" />
    </HStack>
  </VStack>
}