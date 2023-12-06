import { IPost } from "@/interfaces/post.interface";
import { IUser } from "@/interfaces/user.interface";
import { Box, BoxProps, HStack, Heading, Text, VStack } from "@chakra-ui/react";

interface IPostDecal extends BoxProps {
  decal?: string
}

export const PostDecal = ({ decal, ...rest }: IPostDecal) => {

  return <Box px="2" py="1" fontSize={"12px"} borderRadius={"12px"} bgColor="white.900" _dark={{ bgColor: "black.300" }}  {...rest}>
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
    <HStack>
      <Box
        boxSize="20px"
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        bgImage={"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"}
        borderRadius={"50px"}
      />
      <Text>{postedBy.username} &#x2022; 1 min ago</Text>
    </HStack>
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