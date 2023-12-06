import { HStack, Text, VStack } from "@chakra-ui/react"
import axios from "axios"
import dynamic from "next/dynamic"
import { useState } from "react"
import { CustomButton } from "../Button"
import { PostDecal } from "../PostItem"
import { FormInput } from "../inputs/FormInput"

const QuillEditor = dynamic(() => import("../quill/Editor"), { ssr: false })

interface ISubmitForm { }

export type SubmitError = "title_missing" | "text_missing"

interface IAddPostData {
  title: string
  text: string
}

export const SubmitForm = ({ }: ISubmitForm) => {
  const [isError, setIsError] = useState<SubmitError>()
  const [form, setForm] = useState<IAddPostData>({} as IAddPostData)

  const handleSubmit = async () => {
    try {
      const fetch = await axios.post("/api/post", form)
    } catch (error) {
      setIsError((error as any).response.data)
    }
  }

  const titleMissingError = isError === "title_missing" ? "Title is missing" : undefined
  const textMissingError = isError === "text_missing" ? "Text is missing" : undefined

  return (
    <VStack flexDir={"column"} alignItems={"stretch"} gap="4" flex="1" minW="0">
      <FormInput errorMessage={titleMissingError} isInvalid={!!titleMissingError} inputProps={{ fontSize: "16px", placeholder: "Title", name: "title" }} onChange={(ev) => setForm({ ...form, title: ev.target.value })} />
      <QuillEditor errorMessage={textMissingError} defaultValue={form.text} onChange={(v) => setForm({ ...form, text: v })} />
      <HStack gap="0px">
        <Text fontSize={"14px"}>decal/</Text><FormInput w="120px" inputProps={{ fontSize: "12px" }} />
      </HStack>
      <VStack alignItems={"flex-start"} gap="1">
        <HStack>
          <PostDecal decal="coding" />
        </HStack>
        <Text display={"inline"} variant="note">(provide at least 1 decal)</Text>
      </VStack>
      <CustomButton onClick={handleSubmit} px="5" py="4" w="fit-content" variant={"primary"}>
        Post
      </CustomButton>
    </VStack>
  )
}
