import { Flex, Heading, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Text, UseDisclosureReturn } from "@chakra-ui/react"
import axios from "axios"
import { signIn } from "next-auth/react"
import NextLink from "next/link"
import { useState } from "react"
import { Auth0 } from "../Auth0"
import { CustomButton } from "../Button"
import { FloatingInput } from "../inputs/FloatingInput"

interface ISignUpModal extends Partial<ModalProps> {
    disclosure: UseDisclosureReturn
}

export type RegisterError = "username_occupied" | "email_occupied" | "email_invalid" | "birthdate_invalid"

export interface IRegisterFormData {
    username?: string
    email?: string
    password?: string
    confirmPassword?: string
    birthdate?: string
    repeatPassword?: string
}

export const SignupModal = ({ disclosure, ...rest }: ISignUpModal) => {
    const { onClose, isOpen } = disclosure
    const [isError, setIsError] = useState<RegisterError>()

    const [form, setForm] = useState<IRegisterFormData>({})

    const handleSubmit = async () => {
        if (!form.email || !form.username || !form.birthdate) return

        try {
            const fetch = await axios.post("/api/auth/register", form)
            const response = await signIn("credentials", {
                redirect: false,
                email: form.email,
                password: form.password,
            })
            onClose()
        } catch (error) {
            setIsError((error as any).response.data)
        }
    }

    const emailOccupiedError = isError === "email_occupied" ? "Email is occupied" : undefined
    const emailInvalidError = isError === "email_invalid" ? "Email is invalid" : undefined
    const usernameOccupiedError = isError === "username_occupied" ? "Username is occupied" : undefined

    return (
        <Modal {...rest} isOpen={isOpen} size={"xl"} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader as={Flex} flexDir={"column"} rowGap={"4px"}>
                    <Heading>Sign up</Heading>
                    <Flex gap="2">
                        <Text fontSize={"12px"} fontWeight={"medium"}>
                            Already have an account?
                        </Text>
                        <Link as={NextLink} href="/login">
                            Sign in here
                        </Link>
                    </Flex>
                </ModalHeader>
                <ModalBody>
                    <Flex flexDir={"column"} rowGap={"20px"}>
                        <FloatingInput isInvalid={!!usernameOccupiedError} errorMessage={usernameOccupiedError} inputProps={{ name: "username" }} label={"Username"} onChange={(ev) => setForm({ ...form, username: ev.target.value })} />
                        <FloatingInput isInvalid={!!emailInvalidError || !!emailOccupiedError} errorMessage={emailInvalidError || emailOccupiedError} inputProps={{ name: "email" }} label={"E-mail"} onChange={(ev) => setForm({ ...form, email: ev.target.value })} />
                        <FloatingInput inputProps={{ type: "date", name: "date" }} label={"Date of birth"} onChange={(ev) => setForm({ ...form, birthdate: ev.target.value })} />
                        <Flex gap="5">
                            <FloatingInput inputProps={{ type: "password" }} label={"Password"} onChange={(ev) => setForm({ ...form, password: ev.target.value })} />
                            <FloatingInput inputProps={{ type: "password" }} label={"Confirm password"} onChange={(ev) => setForm({ ...form, repeatPassword: ev.target.value })} />
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex flexDir={"row"} alignItems={"flex-start"} justifyContent={"flex-start"}>
                        <CustomButton w="fit-content" px="7" py="6" variant={"contrast"} onClick={() => handleSubmit()}>
                            Sign up
                        </CustomButton>
                    </Flex>
                    <Auth0 />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
