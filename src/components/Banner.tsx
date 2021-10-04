import { Image, Text, Flex, Box, useBreakpointValue } from '@chakra-ui/react'

interface BannerProps {
  isDesktop: boolean | undefined
}

export const Banner = ({ isDesktop }: BannerProps) => {
  return (
    <Flex
        width="100%"
        maxHeight="330px"
        px={["1rem","50px"]}
        py={["2rem","60px"]}
        bgImage="url('background.jpg')"
        position="relative"
      >
        <Flex
          direction="column"
          justify="center"
          width={["300px", "500px"]}
        >
          <Text color="gray.200" fontSize={["xl","3xl"]}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text color="gray.200" fontSize={["md","lg"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Flex>

        { isDesktop && 
          <Image 
            width={["230px","300px"]}
            src="airplane.svg"
            alt="airplane"
            mr="1rem"
            transform="rotate(3deg)"
            position="absolute"
            right="0"
          />
        }
      </Flex>
  )
}