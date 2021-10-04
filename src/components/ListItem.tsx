import { Image, Text, Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from 'react';

interface ListItemProps {
  icon: string
  children: ReactNode
}


export const ListItem = ({ icon, children }: ListItemProps) => {

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex 
      width={["120px","158px"]}
      height={["120px","158px"]}
      direction={["row","column"]}
      align="center"
      justify="center"
    >
      {
        isWideVersion ?
        <Image
          width="85px"
          height="85px"
          src={icon}
          alt="logo"
          mb="1rem"
        /> :
        <Text fontSize={"30px"} color="yellow.500">.</Text>
      }
      <Text
        fontWeight="600"
        fontSize={["1rem","1.5rem"]}
      >
        { children }
      </Text>
    </Flex>
  );
}