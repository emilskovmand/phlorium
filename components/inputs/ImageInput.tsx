import { Box, Flex, FormControl, FormControlProps, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react"
import { PlusIcon } from "@heroicons/react/24/solid"
import { ChangeEvent, useRef, useState } from "react"

interface IFormInput extends FormControlProps {
  label?: any
  helperText?: any
  errorMessage?: any
  inputProps?: InputProps,
  defaultUrl?: string,
  url?: string,
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void,
}

export const ImageInput = ({ onChange, url, defaultUrl, label, helperText, errorMessage, inputProps, ...rest }: IFormInput) => {
  const input = useRef<HTMLInputElement>()

  const [localUrl, setLocalUrl] = useState<string>()

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0]
    if (file) {
      const blob = URL.createObjectURL(file)
      setLocalUrl(blob)
    }
    onChange?.(ev)
  }

  const handleClick = () => {
    input.current?.click()
  }

  const currentUrl = url || localUrl || defaultUrl

  return (
    <FormControl variant={"form"} {...rest}>
      {label && <FormLabel mb="1">{label}</FormLabel>}
      {helperText && <FormHelperText mb="2" mt="1">{helperText}</FormHelperText>}
      <Input ref={input} hidden onChange={handleChange} {...inputProps} type="file" accept="image/*" />
      <Flex cursor={"pointer"} onClick={handleClick} color="black.600" justifyContent={"center"} alignItems="center" boxSize="120px" borderColor={"black.300"} borderRadius={"6px"} _dark={{ borderColor: "white.300", color: "white.600" }} borderWidth={"1px"} borderStyle={"solid"} >
        {!currentUrl && <PlusIcon height="24px" width="24px" />}
        {currentUrl && <Box bgImage={currentUrl} backgroundSize={"cover"} boxSize="100px" backgroundPosition={"center"} />}
      </Flex>
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  )
}