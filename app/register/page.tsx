"use client"
import { SignupModal } from "@/components/modals/Signup"
import { useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const Register = () => {
    const router = useRouter()

    // Modal Handle
    const disclosure = useDisclosure({
        defaultIsOpen: true,
    })

    return (
        <SignupModal
            onCloseComplete={() => {
                router.push("/")
            }}
            disclosure={disclosure}></SignupModal>
    )
}

export default Register
