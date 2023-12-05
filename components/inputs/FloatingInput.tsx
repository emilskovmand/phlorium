import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface IFloatingInput extends FormControlProps {
    label?: any
    helperText?: any
    errorMessage?: any
    inputProps?: InputProps
    onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export const FloatingInput = ({ label, helperText, inputProps, errorMessage, onChange, ...rest }: IFloatingInput) => {
    return (
        <FormControl variant={"floating"} {...rest}>
            <Input onChange={onChange} {...inputProps} placeholder=" " />
            {label && <FormLabel>{label}</FormLabel>}
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
            {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
        </FormControl>
    )
}
