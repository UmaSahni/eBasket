import { Box, Button, Flex, Heading, Image, Spacer, Wrap } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
const OrangeBox = () => {
    return (
        <Box marginTop={8} marginBottom={8} bg='tomato' w='100%' p={4} color='white'>
            <Wrap>
                <Image width={"50px"} src="https://i.ebayimg.com/images/g/rcsAAOSwm9lhmA0r/s-l225.png" alt="image" ></Image>
                <Box marginLeft={5} >
                <Heading  size={"lg"} >
                    Up to 40% OFF. Kick off the year with new tech!
                </Heading>
                <Heading size={"sm"} >Everything you need to help you succeed.</Heading>
                </Box>
                <Spacer />
                <Button colorScheme='Orange.800' variant='outline' >Lets go <Icon as={ArrowForwardIcon} />   </Button>
            </Wrap>
        </Box>
    )
}

export default OrangeBox