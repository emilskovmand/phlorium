import { Button, ButtonProps, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface IButton extends ButtonProps {
  icon?: any,
  linkTo?: string
  children?: any
}

const ButtonComponent = ({ icon, children, ...rest }: IButton) => {
  return <Button {...rest}>
    <Flex alignItems={"center"} columnGap={"12px"}>
      {icon}
      {children}
    </Flex>
  </Button>
}

export const CustomButton = ({ linkTo, ...rest }: IButton) => {

  if (linkTo) {
    return <Link href={linkTo} as={NextLink}>
      <ButtonComponent {...rest} />
    </Link>
  }

  return <ButtonComponent {...rest} />
}