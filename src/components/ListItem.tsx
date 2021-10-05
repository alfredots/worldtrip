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
      width={["50%","50%","158px"]}
      height={["40px","40px","158px"]}
      direction={["row","column"]}
      align="center"
      justify="flex-start"
    >
      {
        isWideVersion ?
        <Image
          width="85px"
          height="85px"
          src={icon}
          alt="icon"
          mb="1rem"
        /> :
        <Image
          width="8px"
          height="8px"
          src='icons/dot.svg'
          alt="icon"
          mr="0.25rem"
        />
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