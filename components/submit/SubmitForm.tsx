import { VStack } from "@chakra-ui/react"
import axios from "axios"
import dynamic from "next/dynamic"
import { useState } from "react"
import { CustomButton } from "../Button"
import { FormInput } from "../inputs/FormInput"

const QuillEditor = dynamic(() => import("../quill/Editor"), { ssr: false })

interface ISubmitForm {}

export type SubmitError = "title_missing" | "text_missing"

interface IAddPostData {
    title: string
    text: string
}

export const SubmitForm = ({}: ISubmitForm) => {
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
            <FormInput errorMessage={titleMissingError} isInvalid={!!titleMissingError} inputProps={{ placeholder: "Title", name: "title" }} onChange={(ev) => setForm({ ...form, title: ev.target.value })} />
            <QuillEditor errorMessage={textMissingError} defaultValue={form.text} onChange={(v) => setForm({ ...form, text: v })} />
            <CustomButton onClick={handleSubmit} px="5" py="4" w="fit-content" variant={"primary"}>
                Post
            </CustomButton>
        </VStack>
    )
