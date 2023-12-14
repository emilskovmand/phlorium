import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps, Textarea, TextareaProps } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface IFormInput extends FormControlProps {
  label?: any
  helperText?: any
  errorMessage?: any
  inputProps?: InputProps
  textareaProps?: TextareaProps
  isTextarea?: boolean
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
  onTextareaChange?: (ev: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyPress?: (ev: React.KeyboardEvent<HTMLInputElement>) => void
}

export const FormInput = ({ onChange, onTextareaChange, textareaProps, isTextarea, label, helperText, errorMessage, inputProps, ...rest }: IFormInput) => {

  return (
    <FormControl variant={"form"} {...rest}>
      {label && <FormLabel mb="1">{label}</FormLabel>}
      {helperText && <FormHelperText mb="2" mt="1">{helperText}</FormHelperText>}
      {!isTextarea && <Input fontSize="14px" onChange={onChange} {...inputProps} />}
      {isTextarea && <Textarea fontSize={"14px"} {...textareaProps} onChange={onTextareaChange} />}
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}
