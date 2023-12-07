"use client"
import { IUser } from "@/interfaces/user.interface"
import { Box, HStack, chakra } from "@chakra-ui/react"
import axios from "axios"
import { Carousel, ICarouselItem } from "../Carousel"
import { Postlist } from "../PostList"
import { Welcome } from "./Welcome"

const items: ICarouselItem[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => ({
    id: v,
    imageUrl: "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "En titel",
    undertitle: "decal/coding",
}))

export const HomeWrapper = () => {
    const getPosts = async () => {
        try {
            const data = await axios.get("/api/post")
            console.log(data)
        } catch (error) {
            console.log("Error:", error)
        }
    }

    getPosts()

    return (
        <chakra.main pl={"8"} pt="8" maxW="100%">
            <Welcome />
            <Box mt="5" mb="6">
                <Carousel items={items} />
            </Box>
            <HStack>
                <Postlist flex="4" list={[{ decals: [], text: "Hejsa texten", title: "Titlen", user: { username: "Username", email: "username@gmail.com", _id: "" } as IUser }]} />
                <Box flex="3">Test</Box>
            </HStack>
        </chakra.main>
    )
}
