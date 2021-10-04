import { Image, Text, Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import { Banner } from './../components/Banner';
import { ListItem } from './../components/ListItem';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Box
      maxWidth="1440px"
      w="100vw"
      h="100vh"
      margin="0 auto"
    >
      <Flex
        width="100%"
        align="center"
        justify="center"
        padding="1rem 0"
      >
        <Image
          width={isWideVersion? '11.25rem': '5rem'}
          src="logo.svg"
          alt="logo"
        />
      </Flex>

      <Banner isDesktop={isWideVersion} />

      <Flex
        px={["1rem","5rem"]}
        py={["1rem","4rem"]}
        justify={["flex-start","space-between"]}
        flexWrap="wrap"
      >
        <ListItem icon="icons/cocktail.svg">
          vida noturna
        </ListItem>
        <ListItem icon="icons/surf.svg">
          praia
        </ListItem>
        <ListItem icon="icons/building.svg">
          moderno
        </ListItem>
        <ListItem icon="icons/museum.svg">
          clássico
        </ListItem>
        <ListItem icon="icons/earth.svg">
          e mais...
        </ListItem>
      </Flex>
    </Box>
  )
}


