import { IPost } from "@/interfaces/post.interface"
import { StackProps, VStack } from "@chakra-ui/react"
import { PostItem } from "./PostItem"

interface IPostList extends StackProps {
  list?: IPost[]
}

export const Postlist = ({ list, ...rest }: IPostList) => {

  return <VStack {...rest} pr="10" alignItems={"flex-start"}>
    {list?.map(v => <PostItem key={v._id || v.id} {...v} />)}
  </VStack>
}