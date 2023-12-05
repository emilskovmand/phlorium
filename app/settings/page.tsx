'use client'
import { FormInput } from "@/components/inputs/FormInput"
import { Heading, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, VStack, chakra } from "@chakra-ui/react"

export default function Settings() {

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
          <Heading fontSize="24px">Account settings</Heading>
        </TabPanel>
        <TabPanel>
          <Heading mb="4" fontSize="24px">Customize profile</Heading>
          <VStack>
            <FormInput inputProps={{ placeholder: "Display name" }} helperText={"This does not change your username"} label="Display name" />
            <FormInput textareaProps={{ minH: "80px", maxH: "240px", placeholder: "About" }} isTextarea helperText={"Write an about section on your profile (max characters: 300)"} label="About" />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </chakra.main>
}