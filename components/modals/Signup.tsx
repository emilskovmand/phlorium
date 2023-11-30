import { IRegisterFormData } from "@/app/register/page"
import { Flex, Heading, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Text, UseDisclosureReturn } from "@chakra-ui/react"
import NextLink from "next/link"
import { CustomButton } from "../Button"
import { FloatingInput } from "../inputs/FloatingInput"

interface ISignUpModal extends Partial<ModalProps> {
    disclosure: UseDisclosureReturn
}

type RegisterError = "username_occupied" | "email_occupied" | "email_invalid" | "birthdate_invalid"

interface IRegisterForm extends ISignUpModal {
    form: IRegisterFormData
    setForm: any
    onSubmit: (form: IRegisterFormData) => Promise<void>
    loading?: boolean
    error?: RegisterError
    checkError?: RegisterError
    checkLoading?: boolean
}

export const SignupModal = ({ disclosure, onSubmit, loading, error, checkError, form, setForm, ...rest }: IRegisterForm) => {
    const { onClose, isOpen } = disclosure

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
                        <FloatingInput name="Username" label={"Username"} value={form?.username} onChange={(ev: any) => setForm({ ...form, username: ev.target.value })} />
                        <FloatingInput name="Email" label={"Email"} value={form?.email} onChange={(ev: any) => setForm({ ...form, email: ev.target.value })} />
                        <FloatingInput inputProps={{ type: "date" }} label={"Date of birth"} name="birthdate" value={form?.birthdate} onChange={(ev: any) => setForm({ ...form, birthdate: ev.target.value })} />
                        <Flex gap="5">
                            <FloatingInput name="Password" inputProps={{ type: "password" }} label={"Password"} value={form?.password} onChange={(ev: any) => setForm({ ...form, password: ev.target.value })} />
                            <FloatingInput inputProps={{ type: "password" }} label={"Confirm password"} value={form?.repeatPassword} name="confirmPassword" onChange={(ev: any) => setForm({ ...form, repeatPassword: ev.target.value })} />
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex flexDir={"row"}>
                        <CustomButton px="7" py="6" variant={"contrast"} onClick={(e: any) => onSubmit(e)}>
                            Sign up
                        </CustomButton>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
