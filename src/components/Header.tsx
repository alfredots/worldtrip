import Link from 'next/link';
import { Image, Divider, Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react'

interface HeaderProps {
  backButton?: boolean
}

export const Header = ({
  backButton = false
}: HeaderProps) => {

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex
      width="100%"
      align="center"
      justify="center"
      padding="1rem 0"
      position="relative"
    >

      { backButton && (
        <Link href="/" passHref>
          <Image
            width='32px'
            height='32px'
            src="/back-button.svg"
            alt="voltar"
            position="absolute"
            left={["30px","130px"]}
            cursor="pointer"
          />
        </Link>
      )}

      <Image
        width={isWideVersion? '11.25rem': '5rem'}
        src="/logo.svg"
        alt="logo"
      />
    </Flex>
  );
}