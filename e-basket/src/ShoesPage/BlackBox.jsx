import { Box, Button, Flex, Heading, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const BlackBox = () => {
  const [isSmallScreen] = useMediaQuery(`(max-width: 480px)`)

  return (
    <Stack
      direction={['column', 'row']}
      spacing={isSmallScreen ? 0 : '2rem'}
      alignItems={isSmallScreen ? 'center' : 'flex-start'}
      marginBottom={8}
    >
      <Box
        w={['100%', '650px']}
        h="300px"
        bg="black"
        color="white"
        p="2rem"
        marginBottom={isSmallScreen ? '1rem' : 0}
        marginRight={!isSmallScreen ?"-10": 0}
      >
        <Heading>Men sneakers</Heading>
        <Heading fontSize="lg">Take 15%* off!</Heading>
        <Box marginTop={7}>
          <Text>Click to copy coupon</Text>
          <Button
            marginTop={10}
            marginBottom={10}
            colorScheme="black"
            width={['100%', '300px']}
            variant="outline"
          >
            SNEAKER23
          </Button>
          <Text>See Terms and Conditions</Text>
        </Box>
      </Box>
     
        <Image
          src="https://i.ebayimg.com/images/g/kR8AAOSw7RFj4YII/s-l1600.webp"
          h="300px"
          objectFit="cover"
          flex="1"
        />
     
    </Stack>
  )
}

export default BlackBox
