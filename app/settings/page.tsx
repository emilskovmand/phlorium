'use client'
import { FormInput } from "@/components/inputs/FormInput"
import { FormSwitch } from "@/components/inputs/FormSwitch"
import { ImageInput } from "@/components/inputs/ImageInput"
import { Button, HStack, Heading, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, VStack, chakra, useColorMode } from "@chakra-ui/react"

export default function Settings() {

  const { toggleColorMode, colorMode } = useColorMode()

  return <chakra.main px={"8"} py="8" maxW="100%">
    <Heading fontSize="24px" mb="4">User settings</Heading>
    <Tabs position="relative" variant="unstyled">
      <TabList borderBottomColor={"black.300"} _dark={{ borderBottomColor: "white.300" }} borderBottomWidth={"1px"} borderBottomStyle={"solid"}>
        <Tab>Account</Tab>
        <Tab>Profile</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="brand.900"
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel>
          <Heading mb="4" fontSize="24px">Account settings</Heading>
          <VStack gap="3">
            <FormSwitch onChange={toggleColorMode} isChecked={colorMode === "dark"} label={<Text fontSize="inherit">Color mode <Text display={"inline"} variant={"note"} fontSize="inherit">(light - dark)</Text></Text>} />
          </VStack>
        </TabPanel>
        <TabPanel>
          <Heading mb="4" fontSize="24px">Customize profile</Heading>
          <VStack gap="3">
            <FormInput inputProps={{ placeholder: "Display name" }} helperText={"This does not change your username"} label="Display name" />
            <FormInput textareaProps={{ minH: "80px", maxH: "240px", placeholder: "About" }} isTextarea helperText={"Write an about section on your profile (max characters: 300)"} label="About" />
            <ImageInput label="Profile image" helperText={"Select an image on your computer to display as your profile picture"} />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <HStack mt="4" gap="3" mx="4">
      <Button w="fit-content" px="5" py="5">
        Cancel
      </Button>
      <Button w="fit-content" px="5" py="5" variant="primary">
        Save
      </Button>
    </HStack>
  </chakra.main>
}