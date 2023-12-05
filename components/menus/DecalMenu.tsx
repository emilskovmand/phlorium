import { Box, Button, Input, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline"


export const DecalMenu = () => {

  return <Menu matchWidth >
    <MenuButton
      as={Button}
      textAlign={"start"}
      variant={"ghost"}
      px="1"
      bgColor="transparent"
      borderBottomColor={"black.900"}
      borderBottomWidth={"1px"}
      borderBottomStyle={"solid"}
      _dark={{
        borderBottomColor: "white.900",
      }}
      borderRadius={"0px"}
      w="15rem"
      leftIcon={<GlobeAltIcon height={"24px"} width="24px" />}
      rightIcon={<ChevronDownIcon height={"20px"} width="20px" />}
    >
      <Text fontWeight={"semibold"}>Decal / Home</Text>
    </MenuButton>
    <MenuList>
      <Box px="2" mb="4">
        <Input fontSize={"12px"} h="fit-content" padding="1" placeholder="Filter" />
      </Box>
      <MenuGroup title="Subscribed decals">
        <MenuItem>decal/Coding</MenuItem>
        <MenuItem>decal/Gaming</MenuItem>
        <MenuItem>decal/Music</MenuItem>
        <MenuItem>decal/Tech</MenuItem>
      </MenuGroup>
      <MenuGroup title="Recent decals">
        <MenuItem>decal/Coding</MenuItem>
        <MenuItem>decal/Gaming</MenuItem>
        <MenuItem>decal/Music</MenuItem>
        <MenuItem>decal/Tech</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
}