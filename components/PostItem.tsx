import { IPost } from "@/interfaces/post.interface";
import { IUser } from "@/interfaces/user.interface";
import { Box, Text, VStack } from "@chakra-ui/react";


export const PostItem = ({ user }: IPost) => {

  const postedBy = user as IUser

  return <VStack
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
      <Text>{postedBy.username}</Text>
    </Box>
  </VStack>
}