import { Button, ButtonProps, Flex, Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

interface IButton extends ButtonProps {
  icon?: any,
  linkTo?: string
  children?: any,
  linkProps?: LinkProps
}

const ButtonComponent = ({ icon, children, ...rest }: IButton) => {
  return <Button {...rest}>
    <Flex alignItems={"center"} columnGap={"12px"}>
      {icon}
      {children}
    </Flex>
  </Button>
}

export const CustomButton = ({ linkTo, linkProps, ...rest }: IButton) => {

  if (linkTo) {
    return <Link href={linkTo} as={NextLink} {...linkProps}>
      <ButtonComponent {...rest} />
    </Link>
  }

  return <ButtonComponent {...rest} />
}