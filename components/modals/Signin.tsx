import { Flex, HStack, Heading, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Text, UseDisclosureReturn } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import NextLink from "next/link"
import { useState } from "react"
import { Auth0 } from "../Auth0"
import { CustomButton } from "../Button"
import { FloatingInput } from "../inputs/FloatingInput"

interface ISignInModal extends Partial<ModalProps> {
    disclosure: UseDisclosureReturn
}

export interface ILoginFormData {
    email?: string
    password?: string
}

export const SigninModal = ({ disclosure, ...rest }: ISignInModal) => {
    const { onClose, isOpen } = disclosure

    const [form, setForm] = useState<ILoginFormData>({})

    const handleSignin = async (e: any) => {
        e.preventDefault()
        const response = await signIn("credentials", {
            redirect: false,
            email: form.email,
            password: form.password,
        })
        onClose()
        return response
    }

    return (
        <Modal {...rest} isOpen={isOpen} size={"xl"} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader as={Flex} flexDir={"column"} rowGap={"4px"}>
                    <Heading>Sign in</Heading>
                    <Flex gap="2">
                        <Text fontSize={"12px"} fontWeight={"medium"}>
                            {"Don't have an account?"}
                        </Text>
                        <Link as={NextLink} href="/register">
                            Register here
                        </Link>
                    </Flex>
                </ModalHeader>
                <ModalBody>
                    <Flex flexDir={"column"} rowGap={"20px"}>
                        <FloatingInput inputProps={{ name: "email" }} label={"E-mail"} onChange={(ev) => setForm({ ...form, email: ev.target.value })} />
                        <FloatingInput inputProps={{ name: "password", type: "password" }} label={"Password"} onChange={(ev) => setForm({ ...form, password: ev.target.value })} />
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <HStack>
                        <Flex flexDir={"row"}>
                            <CustomButton onClick={(e) => handleSignin(e)} px="7" py="6" variant={"contrast"}>
                                Sign up
                            </CustomButton>
                        </Flex>
                        <CustomButton fontSize={"12px"} fontWeight={"normal"} w="auto" ml={"auto"} variant={"ghost"}>
                            Forgot password?
                        </CustomButton>
                    </HStack>
                    <Auth0 />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
