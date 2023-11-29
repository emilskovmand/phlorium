import { Box, Flex, FlexProps, Text, useColorModeValue } from "@chakra-ui/react"
import { BarsArrowUpIcon } from "@heroicons/react/24/outline"
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid"
import { CustomButton } from "./Button"

interface ISidebar extends FlexProps {

}

export const Sidebar = ({ ...rest }: ISidebar) => {

  return <Flex {...rest} alignSelf={"stretch"}>
    <Box py="5" ml="auto" width={"60%"}>
      {/* Quick navigation */}
      <Flex
        px="4"
        borderColor={useColorModeValue('black.300', 'white.300')}
        borderBottomWidth={"1px"}
        borderBottomStyle={"solid"}
        pb="3"
        rowGap={"8px"}
        flexDir={"column"}
        alignItems={"stretch"}
      >
        <Text variant={"note"}>Quick navigation</Text>
        <CustomButton variant={"anchor"} icon={<ArrowTrendingUpIcon height="20px" width="20px" />} >
          Popular
        </CustomButton>
        <CustomButton variant={"anchor"} icon={<BarsArrowUpIcon height="20px" width="20px" />} >
          Newest
        </CustomButton>
      </Flex>

      {/* Recent decals */}
      <Box>
        <Flex
          px="4"
          py="4"
          rowGap={"8px"}
          flexDir={"column"}
          alignItems={"stretch"}
        >
          <Text variant={"note"}>Recent decals</Text>
          <CustomButton variant={"anchor"}>
            decal/Coding
          </CustomButton>
          <CustomButton variant={"anchor"}>
            decal/Gaming
          </CustomButton>
          <CustomButton variant={"anchor"}>
            decal/Music
          </CustomButton>
          <CustomButton variant={"anchor"}>
            decal/Tech
          </CustomButton>
        </Flex>
      </Box>
    </Box>
  </Flex>
}