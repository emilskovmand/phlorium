import { FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, Switch, SwitchProps } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface ISwitchInput extends FormControlProps {
  label?: any
  helperText?: any
  errorMessage?: any
  switchProps?: SwitchProps
  defaultChecked?: boolean,
  isChecked?: boolean
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void,
}

export const FormSwitch = ({ label, onChange, isChecked, defaultChecked, errorMessage, switchProps, helperText, ...rest }: ISwitchInput) => {

  return <FormControl {...rest}>
    <FormLabel onClick={(ev) => ev.preventDefault()} mb='1'>{label}</FormLabel>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
    <Switch size={"md"} onChange={onChange} isChecked={isChecked} defaultChecked={defaultChecked} {...switchProps} />
    {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
  </FormControl>
}