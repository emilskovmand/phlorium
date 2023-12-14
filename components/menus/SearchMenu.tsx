import { Box, Menu, MenuButton, MenuButtonProps, MenuDivider, MenuItem, MenuItemProps, MenuList, MenuListProps, MenuProps } from "@chakra-ui/react"

interface ISearchMenu extends MenuProps {
  searchContainer?: any,
  searchContainerRef?: any,
  children: any,
  menuButtonProps?: MenuButtonProps
}

interface ISearchMenuList extends MenuListProps {
  menuItems?: Array<{ id: any, content?: any }>,
  search?: string
}

const menuItemStyle: MenuItemProps = {

}

export const SearchMenuList = ({ search, menuItems, children, ...rest }: ISearchMenuList) => {

  return <MenuList borderTopRadius={"0px"} rootProps={{ top: "-8px !important" }} {...rest}>
    {menuItems?.map(it => <MenuItem
      key={it.id}
      {...menuItemStyle}
    >
      {it.content}
    </MenuItem>)}
    {search && <>
      <MenuDivider />
      <MenuItem {...menuItemStyle}>
        Search for {`"${search}"`}
      </MenuItem>
    </>}
  </MenuList>
}

export const SearchMenu = ({ searchContainer, searchContainerRef, menuButtonProps, children, ...rest }: ISearchMenu) => {

  return <Menu autoSelect={false} placement={"bottom-start"} isLazy {...rest}>
    <MenuButton w="100%" onClick={() => searchContainerRef.current?.focus()} as={Box} {...menuButtonProps}>
      {searchContainer}
    </MenuButton>
    {children}
  </Menu>
}