'use client'
import { FormInput } from "@/components/inputs/FormInput"
import { FormSwitch } from "@/components/inputs/FormSwitch"
import { ImageInput } from "@/components/inputs/ImageInput"
import { IUser } from "@/interfaces/user.interface"
import { Button, HStack, Heading, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, VStack, chakra, useColorMode } from "@chakra-ui/react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useState } from "react"

export interface ISettingsForm extends Partial<IUser> {

}

export default function Settings() {

  const handleSubmit = async () => {
    const fetch = await axios.patch("/api/user", form)
    setForm({})
  }

  const [form, setForm] = useState<ISettingsForm>({
  })

  const { toggleColorMode, colorMode, setColorMode } = useColorMode()
  const { data } = useSession()
  const user: IUser | undefined = data?.user as any

  if (!user) {
    return <></>
  }

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
            <FormSwitch
              onChange={(ev) => setForm({ ...form, settings: { ...form.settings, colormode: ev.target.checked ? 'dark' : 'light' } })}
              label={<Text fontSize="inherit">Color mode <Text as={chakra.span} display={"inline"} variant={"note"} fontSize="inherit">(light - dark)</Text></Text>}
              defaultChecked={user?.settings?.colormode === "dark"}
            />
          </VStack>
        </TabPanel>
        <TabPanel>
          <Heading mb="4" fontSize="24px">Customize profile</Heading>
          <VStack gap="3">
            <FormInput
              onChange={(ev) => setForm({ ...form, settings: { ...form.settings, displayname: ev.target.value } })}
              inputProps={{ placeholder: "Display name", defaultValue: user?.settings?.displayname }} helperText={"This does not change your username"} label="Display name" />
            <FormInput
              onTextareaChange={(ev) => setForm({ ...form, settings: { ...form.settings, about: ev.target.value } })}
              textareaProps={{ minH: "80px", maxH: "240px", placeholder: "About", defaultValue: user?.settings?.about }} isTextarea helperText={"Write an about section on your profile (max characters: 300)"} label="About" />
            <ImageInput label="Profile image" helperText={"Select an image on your computer to display as your profile picture"} />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <HStack mt="4" gap="3" mx="4">
      <Button w="fit-content" px="5" py="5">
        Cancel
      </Button>
      <Button onClick={handleSubmit} w="fit-content" px="5" py="5" variant="primary">
        Save
      </Button>
    </HStack>
  </chakra.main>
}