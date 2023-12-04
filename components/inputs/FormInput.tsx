import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface IFormInput extends FormControlProps {
  label?: any
  helperText?: any
  errorMessage?: any
  inputProps?: InputProps
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({ onChange, label, helperText, errorMessage, inputProps, ...rest }: IFormInput) => {

  return (
    <FormControl variant={"form"} {...rest}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input onChange={onChange} {...inputProps} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}