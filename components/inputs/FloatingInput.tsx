import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";

interface IFloatingInput extends FormControlProps {
  label?: any;
  helperText?: any;
  errorMessage?: any;
  inputProps?: InputProps;
  value?: any;
  onChange?: any;
  name: string;
}

export const FloatingInput = ({
  label,
  helperText,
  inputProps,
  errorMessage,
  value,
  onChange,
  name,
  ...rest
}: IFloatingInput) => {
  return (
    <FormControl variant={"floating"} {...rest}>
      <Input
        value={value}
        {...inputProps}
        placeholder=" "
        onChange={onChange}
        name={name}
      />

      {label && <FormLabel>{label}</FormLabel>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
