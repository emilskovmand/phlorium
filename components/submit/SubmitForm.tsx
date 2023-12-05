import { VStack } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { CustomButton } from "../Button"
import { FormInput } from "../inputs/FormInput"

const QuillEditor = dynamic(() => import('../quill/Editor'), { ssr: false })

interface ISubmitForm {

}

export const SubmitForm = ({ }: ISubmitForm) => {

  return <VStack flexDir={"column"} alignItems={"stretch"} gap="4" flex="1" minW="0">
    <FormInput inputProps={{ placeholder: "Title" }} />
    <QuillEditor placeholder="Write your post here..." />
    <CustomButton px="5" py="4" w="fit-content" variant={"primary"}>Post</CustomButton>
  </VStack>
}