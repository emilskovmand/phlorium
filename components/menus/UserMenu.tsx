import { Box, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react"
import { signOut } from "next-auth/react"
import NextLink from "next/link"

interface IUserMenu {
  children: React.ReactNode
}

export const UserMenu = ({ children }: IUserMenu) => {

  return <Menu >
    <MenuButton
      as={Box}
      cursor={"pointer"}
    >
      {children}
    </MenuButton>
    <MenuList>
      <MenuGroup title="My user">
        <MenuItem>Profile</MenuItem>
        <NextLink href="/settings"><MenuItem>User settings</MenuItem></NextLink>
        <MenuDivider />
        <MenuItem onClick={() => signOut({})}>Log out</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
}