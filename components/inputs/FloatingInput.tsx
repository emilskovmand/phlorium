import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react"

interface IFloatingInput extends FormControlProps {
  label?: any,
  helperText?: any,
  errorMessage?: any,
  inputProps?: InputProps
}

export const FloatingInput = ({ label, helperText, inputProps, errorMessage, ...rest }: IFloatingInput) => {

  return <FormControl variant={"floating"} {...rest}>
    <Input {...inputProps} placeholder=" " />

    {label && <FormLabel>{label}</FormLabel>}
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
    {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
  </FormControl>
}