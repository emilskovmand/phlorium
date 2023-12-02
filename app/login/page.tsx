"use client"
import { SigninModal } from "@/components/modals/Signin"
import { useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const Register = () => {
  const router = useRouter()

  // Modal Handle
  const disclosure = useDisclosure({
    defaultIsOpen: true,
  })

  return (
    <SigninModal
      onCloseComplete={() => {
        router.push("/")
      }}
      disclosure={disclosure}></SigninModal>
  )
}

export default Register
