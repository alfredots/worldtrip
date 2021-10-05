import { GetStaticProps } from 'next';
import { Image, Divider, Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { Banner } from './../components/Banner';
import { ListItem } from './../components/ListItem';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import axios from 'axios'

type Continent = {
  id: string,
  name: string,
  description:string,
  img: string,
}

interface HomeProps {
  continents: Continent[]
}

interface ContinentResponse {
  data: Continent[]
}

SwiperCore.use([Navigation]);

export default function Home({ continents }: HomeProps) {
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

      <Flex
        width="100%"
        align="center"
        justify="center"
        padding="1rem 0"
        direction="column"
      >
        <Divider
          backgroundColor="blue.800"
          width="60px"
          mb="1rem"
        />
        <Text
          fontWeight="600"
          fontSize={["1rem","1.5rem"]}
        >
          Vamos nessa?
        </Text>
        <Text
          fontWeight="600"
          fontSize={["1rem","1.5rem"]}
        >
          Então escolha seu continente
        </Text>
      </Flex>

      <Box width="100%" pb="40px">
        <Swiper navigation={true} className="mySwiper">
          {
            continents.map( continent => (
              <SwiperSlide key={continent.id}>
                <Flex
                  width="100%"
                  height={["250px","450px"]}
                  bgImage={continent.img}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  direction="column"
                  align="center"
                  justify="center"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    left="0"
                    top="0"
                    width="100%"
                    height="100%"
                    bgColor="blackAlpha.600"
                    zIndex="1"
                  />
                  <Text
                    color="blue.100"
                    fontSize={["24px","48px"]}
                    zIndex="10"
                  >
                    {continent.name}
                  </Text>
                  <Text
                    color="blue.100"
                    fontSize={["14px","24px"]}
                    zIndex="10"
                  >
                    {continent.description}
                  </Text>
                </Flex>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
    </Box>
  )
}


export const getStaticProps: GetStaticProps<HomeProps> = async() => {

  const URL_TO_FETCH = 'http://localhost:3000/api/continents'; 

  const response = await axios.get<ContinentResponse>(URL_TO_FETCH)

  return {
    props: {
      continents: response.data.data
    }
  }
}