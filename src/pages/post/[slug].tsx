import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Image, Divider, Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'
import axios from 'axios'
import { Header } from '../../components/Header';

type Continent = {
  name: string,
  description: string,
  total_of_countries: number,
  total_of_languages: number,
  cities_over_hundred: number,
  img: string,
  cities: {
    name: string,
    country: string,
    img: string
  } []
}

interface PostProps {
  continent: Continent
}

interface ContinentResponse {
  data: Continent
}


export default function Post({ continent }: PostProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex
      maxWidth="1440px"
      w="100vw"
      margin="0 auto"
      direction="column"
      align="center"
    >
      <Header backButton />

      <Box
        width="100%"
        height="500px"
        bgImage={continent.img}
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
          position="absolute"
          zIndex="10"
          left="140px"
          bottom="59px"
          cursor="pointer"
        >
          {continent.name}
        </Text>
      </Box>

      <Flex
        width="1160px"
      >
        <Box
          width="100%"
        >
          <Text
            maxWidth="600px"
            fontSize="24px"
            pt="80px"
          >
            {continent.description}
          </Text>
        </Box>
        <Flex
          mt="136px"
          ml="70px"
          gridGap="2rem"
        >
          <Box
            textAlign="center"
          >
            <Text
              fontSize="48px"
              color="yellow.200"
            >
              {continent.total_of_countries}
            </Text>
            <Text
              fontSize="24px"
              fontWeight="600"
            >
              países
            </Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Text
              fontSize="48px"
              color="yellow.200"
            >
              {continent.total_of_languages}
            </Text>
            <Text
              fontSize="24px"
              fontWeight="600"
            >
              línguas
            </Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Text
              fontSize="48px"
              color="yellow.200"
            >
              {continent.cities_over_hundred}
            </Text>
            <Text
              fontSize="24px"
              fontWeight="600"
            >
              cidades+100
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        width="1160px"
        direction="column"
        align="center"
        mt="80px"
      >
        <Text
          fontSize="36px"
          fontWeight="500"
          alignSelf="flex-start"
        >
          Cidades +100
        </Text>

        <Flex
          width="100%"
          mt="40px"
          mb="40px"
          justify="space-between"
        >
          {
            continent.cities.map(city => (
              <Box
                key={city.name}
                width="256px"
                height="279px"
                borderRadius="4px"
                bgColor="white"
              >
                <Image 
                  width="256px"
                  height="173px"
                  borderRadius="4px 4px 0px 0px"
                  src={city.img}
                  alt={city.name}
                />
                <Text
                  fontSize="20px"
                  fontFamily="Barlow"
                  fontWeight="600"
                  pt="18px"
                  pl="24px"
                >
                  {city.name}
                </Text>
                <Text
                  fontSize="16px"
                  fontFamily="Barlow"
                  fontWeight="600"
                  color="gray.400"
                  pt="12px"
                  pl="24px"
                >
                  {city.country}
                </Text>
              </Box>
            ))
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO
  const continents = ['africa', 'asia', 'europe', 'north_america', 'south_america', 'oceania']

  const paths = continents.map(name => {
    return {
      params: {
        slug: name,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};


export const getStaticProps: GetStaticProps<PostProps> = async({ params }) => {
  const { slug } = params
  const URL_TO_FETCH = `http://localhost:3000/api/continent/${slug}`; 

  const response = await axios.get<ContinentResponse>(URL_TO_FETCH)

  return {
    props: {
      continent: response.data.data
    }
  }
}