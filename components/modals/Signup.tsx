import { Flex, Heading, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Text, UseDisclosureReturn } from "@chakra-ui/react"
import NextLink from "next/link"
import { CustomButton } from "../Button"
import { FloatingInput } from "../inputs/FloatingInput"

interface ISignUpModal extends Partial<ModalProps> {
  disclosure: UseDisclosureReturn
}

export const SignupModal = ({ disclosure, ...rest }: ISignUpModal) => {
  const { onClose, isOpen } = disclosure

  return <Modal {...rest} isOpen={isOpen} size={"xl"} onClose={onClose} >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader as={Flex} flexDir={"column"} rowGap={"4px"}>
        <Heading>Sign up</Heading>
        <Flex gap="2">
          <Text fontSize={"12px"} fontWeight={"medium"}>Already have an account?</Text>
          <Link as={NextLink} href="/login">Sign in here</Link>
        </Flex>
      </ModalHeader>
      <ModalBody>
        <Flex flexDir={"column"} rowGap={"20px"}>
          <FloatingInput label={"Email"} />
          <FloatingInput inputProps={{ type: "date" }} label={"Date of birth"} />
          <Flex gap="5">
            <FloatingInput inputProps={{ type: "password" }} label={"Password"} />
            <FloatingInput inputProps={{ type: "password" }} label={"Confirm password"} />
          </Flex>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Flex flexDir={"row"}>
          <CustomButton px="7" py="6" variant={"contrast"}>Sign up</CustomButton>
        </Flex>
      </ModalFooter>
    </ModalContent>
  </Modal>
}