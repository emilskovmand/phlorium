"use client"
import { SignupModal } from "@/components/modals/Signup"
import { useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export interface IRegisterFormData {
    username?: string
    email?: string
    password?: string
    confirmPassword?: string
    birthdate?: string
    repeatPassword?: string
}

const Register = () => {
    const router = useRouter()
    const [form, setForm] = useState<IRegisterFormData>({})

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        try {
            const res = await axios.post("/api/auth/register", form)
            console.log("Success:", res)
        } catch (error) {
            console.log("Failed:", error)
        }
    }

    // Modal Handle
    const disclosure = useDisclosure({
        defaultIsOpen: true,
    })

    console.log(form)

    return (
        <SignupModal
            onSubmit={handleSubmit}
            setForm={setForm}
            form={form}
            onCloseComplete={() => {
                router.push("/")
            }}
            disclosure={disclosure}></SignupModal>
    )
}

export default Register
