'use client'
import { chakra } from "@chakra-ui/react"
import { Welcome } from "./Welcome"

export const HomeWrapper = () => {

  return <chakra.main pl={"8"} pt="8" maxW="100%">
    <Welcome />
  </chakra.main>
}