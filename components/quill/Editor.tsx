"use client"
import { Box, FormControl, FormErrorMessage, useColorModeValue } from "@chakra-ui/react"
import ReactQuill from "react-quill"
import "./editor.css"

interface IQuillEditor {
    placeholder?: string
    defaultValue: any
    errorMessage?: any
    onChange: (data: string) => void
}

const QuillEditor = ({ defaultValue, onChange, errorMessage, ...rest }: IQuillEditor) => {
    const className = useColorModeValue("quill-light", "quill-dark")

    const handleQuillEditor = (value: string, delta: any, source: any, editor: ReactQuill.UnprivilegedEditor) => {
        onChange(value)
    }

    return (
        <>
            <FormControl variant={"form"} {...rest}>
                <Box>
                    <ReactQuill onChange={handleQuillEditor} className={className + " quill-editor"} theme="snow" {...rest} />
                </Box>
                {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
            </FormControl>
        </>
    )
}

export default QuillEditor
