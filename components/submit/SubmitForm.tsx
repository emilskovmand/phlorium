import { Button, HStack, Text, VStack } from "@chakra-ui/react"
import axios from "axios"
import dynamic from "next/dynamic"
import { useState } from "react"
import { CustomButton } from "../Button"
import { PostDecal } from "../PostItem"
import { FormInput } from "../inputs/FormInput"

const QuillEditor = dynamic(() => import("../quill/Editor"), { ssr: false })

interface ISubmitForm {}

export type SubmitError = "title_missing" | "text_missing" | "decal_exists" | "decal_missing"

interface IAddPostData {
    title: string
    text: string
    decals: string[]
}

export const SubmitForm = ({}: ISubmitForm) => {
    const [isError, setIsError] = useState<SubmitError>()
    const [form, setForm] = useState<IAddPostData>({ title: "", text: "", decals: [] })
    const [currentDecal, setCurrentDecal] = useState<string>("")

    const handleAddDecal = () => {
        if (form.decals.includes(currentDecal)) {
            setIsError("decal_exists")
            return
        } else if (currentDecal === "") {
            setIsError("decal_missing")
            return
        }

        setForm({ ...form, decals: [...form.decals, currentDecal] })
        setCurrentDecal("")
    }

    const handleSubmit = async () => {
        try {
            await axios.post("/api/post", form)
        } catch (error) {
            setIsError((error as any).response.data)
        }
        console.log(form)
    }

    const titleMissingError = isError === "title_missing" ? "Title is missing" : undefined
    const textMissingError = isError === "text_missing" ? "Text is missing" : undefined
    const decalDuplicate = isError === "decal_exists" ? "Decal already exists" : undefined
    const decalMissingError = isError === "decal_missing" ? "Decal is missing" : undefined

    return (
        <VStack flexDir={"column"} alignItems={"stretch"} gap="4" flex="1" minW="0">
            <FormInput errorMessage={titleMissingError} isInvalid={!!titleMissingError} inputProps={{ fontSize: "16px", placeholder: "Title", name: "title" }} onChange={(ev) => setForm({ ...form, title: ev.target.value })} />
            <QuillEditor errorMessage={textMissingError} defaultValue={form.text} onChange={(v) => setForm({ ...form, text: v })} />
            <HStack gap="16px">
                <HStack gap="0px">
                    <Text fontSize={"14px"}>decal/</Text>
                    <FormInput errorMessage={isError === "decal_exists" ? decalDuplicate : isError === "decal_missing" ? decalMissingError : undefined} isInvalid={!!decalDuplicate || !!decalMissingError} onChange={(ev) => setCurrentDecal(ev.target.value)} w="240px" inputProps={{ fontSize: "12px", name: "decal" }} />
                </HStack>
                <Button onClick={handleAddDecal} width={"100px"} justifyContent={"center"} fontSize={"14px"}>
                    Add decal
                </Button>
            </HStack>
            <VStack alignItems={"flex-start"} gap="1">
                <HStack>
                    {form.decals.length === 0 ? (
                        <Text display={"inline"} variant="note">
                            No decals added
                        </Text>
                    ) : (
                        form.decals.map((decal, index) => <PostDecal decal={decal} key={index} />)
                    )}
                </HStack>
                <Text display={"inline"} variant="note">
                    (provide at least 1 decal)
                </Text>
            </VStack>
            <CustomButton onClick={handleSubmit} px="5" py="4" w="fit-content" variant={"primary"}>
                Post
            </CustomButton>
        </VStack>
    )
}
