import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, Box, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { africa, asia, europe, north_america, oceania, south_america } from '../../data'
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
    flag:string,
    img: string
  } []
}

interface PostProps {
  continent: Continent | null
}

export default function Post({ continent }: PostProps) {

  if (continent === null) {
    return <h1>Página não existentente</h1>
  }

  return (
    <Flex
      maxWidth="1440px"
      w="100vw"
      margin="0 auto"
      direction="column"
      align="center"
    >
      <Header backButton />

      <Flex
        width="100%"
        height={["150px","500px"]}
        bgImage={continent.img}
        bgPosition="center"
        position="relative"
        align="center"
        justify="center"
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
          left={["","140px"]}
          bottom={["","59px"]}
          cursor="pointer"
        >
          {continent.name}
        </Text>
      </Flex>

      <Flex
        width="100%"
        maxWidth={["100%", "1160px"]}
        direction={["column", "row"]}
      >
        <Box
          width="100%"
        >
          <Text
            maxWidth={["100%","600px"]}
            fontSize={["14px","24px"]}
            pt="80px"
            px={["1rem",""]}
          >
            {continent.description}
          </Text>
        </Box>
        <Flex
          mt={["1rem","136px"]}
          ml={["", "70px"]}
          px="1rem"
          gridGap={["1rem", "2rem"]}
        >
          <Box
            textAlign="center"
          >
            <Text
              fontSize={["24px","48px"]}
              color="yellow.200"
            >
              {continent.total_of_countries}
            </Text>
            <Text
              fontSize={["18px","24px"]}
              fontWeight="600"
            >
              países
            </Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Text
              fontSize={["24px","48px"]}
              color="yellow.200"
            >
              {continent.total_of_languages}
            </Text>
            <Text
              fontSize={["18px","24px"]}
              fontWeight="600"
            >
              línguas
            </Text>
          </Box>
          <Box
            textAlign="center"
          >
            <Text
              fontSize={["24px","48px"]}
              color="yellow.200"
            >
              {continent.cities_over_hundred}
            </Text>
            <Text
              fontSize={["18px","24px"]}
              fontWeight="600"
            >
              cidades+100
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        width="100%"
        maxWidth={["100%", "1160px"]}
        direction="column"
        align="center"
        mt={["40px", "80px"]}
        px="1rem"
      >
        <Text
          fontSize={["24px","36px"]}
          fontWeight="500"
          alignSelf="flex-start"
        >
          Cidades +100
        </Text>

        <Flex
          width="100%"
          mt="40px"
          mb="40px"
          direction={["column", "row"]}
          gridGap={["1rem",""]}
          align={["center"]}
          justify={["center","space-between"]}
        >
          {
            continent.cities.map(city => (
              <Card
                key={city.name}
                name={city.name}
                country={city.country}
                flag={city.flag}
                img={city.img}
              />
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
    fallback: 'blocking',
  };
};


export const getStaticProps: GetStaticProps<PostProps> = ({ params }) => {
  const slug = params?.slug
  let continent = null

  switch (slug) {
    case 'europe':
      continent = europe
      break;
    case 'africa':
      continent = africa
      break;
    case 'north_america':
      continent = north_america
      break;
    case 'south_america':
      continent = south_america
      break;
    case 'asia':
      continent = asia
      break;
    case 'oceania':
      continent = oceania
      break;
    default:
      continent = null
      break;
  }

  return {
    props: {
      continent
    }
  }
}