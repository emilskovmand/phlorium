import { IPost } from "@/interfaces/post.interface"
import { StackProps, VStack } from "@chakra-ui/react"
import { PostItem } from "./PostItem"

interface IPostList extends StackProps {
    list?: IPost[] | null
}

export const Postlist = ({ list, ...rest }: IPostList) => {
    console.log(list)

    return (
        <VStack {...rest} pr="10" alignItems={"flex-start"}>
            {(list?.length || 0) > 0 &&
                list?.map((post) => {
                    return <PostItem key={post._id || post.id} {...post} />
                })}
        </VStack>
    )
}
