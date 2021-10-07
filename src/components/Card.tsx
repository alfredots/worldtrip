import { Image, Divider, Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'

interface CardProps {
  name: string,
  country: string,
  flag:string,
  img: string
}

export const Card = ({ name, country, flag, img }: CardProps) => {
  return (
    <Box
      key={name}
      width="256px"
      height="279px"
      borderRadius="4px"
      bgColor="white"
      position="relative"
    >
      <Image 
        width="256px"
        height="173px"
        borderRadius="4px 4px 0px 0px"
        src={img}
        alt={name}
      />
      <Text
        fontSize="20px"
        fontFamily="Barlow"
        fontWeight="600"
        pt="18px"
        pl="24px"
      >
        {name}
      </Text>
      <Text
        fontSize="16px"
        fontFamily="Barlow"
        fontWeight="600"
        color="gray.400"
        pt="12px"
        pl="24px"
      >
        {country}
      </Text>
      <Box
        width="30px"
        height="30px"
        bgImage={flag}
        bgPosition="center"
        bgSize="cover"
        border="0.1px solid #DADADA"
        borderRadius="50%"
        position="absolute"
        right="24px"
        bottom="38px"
      />
    </Box>
  )
}