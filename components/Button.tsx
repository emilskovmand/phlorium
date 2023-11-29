import { Button, ButtonProps, Flex } from "@chakra-ui/react";

interface IButton extends ButtonProps {
  icon?: any,
  children?: any
}

export const CustomButton = ({ children, icon, ...rest }: IButton) => {

  return <Button {...rest}>
    <Flex alignItems={"center"} columnGap={"12px"}>
      {icon}
      {children}
    </Flex>
  </Button>
}