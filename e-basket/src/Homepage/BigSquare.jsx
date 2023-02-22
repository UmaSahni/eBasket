import { Box, Button, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const BigSquare = () => {
    const [isSmallScreen] = useMediaQuery("(max-width: 464px)");
    const [isSecondSmallScreen] = useMediaQuery("(max-width: 842px)");
    return (
    <div>
        <Box position="relative" marginBottom={8} >
        <Image src="https://i.ebayimg.com/images/g/9DIAAOSwq-Fj7Z56/s-l1600.webp" ></Image>
            {
                !isSmallScreen ?  (
            <Box position="absolute" top="0" left="0"   padding="1rem">
                <Heading    color="white" fontSize="40px" fontWeight="bold">Fitness Gadgets</Heading>
                <Button  colorScheme='white' borderRadius={"1%"} variant='outline' >Buy it Now <Icon as={ArrowForwardIcon} />  </Button>
            </Box>
            ) : (<Box position="absolute" top="0" left="0"   padding="1rem">
                <Heading    color="white" fontSize="20px" fontWeight="bold">Fitness Gadgets</Heading>
                <Button  colorScheme='white' borderRadius={"1%"} variant='outline' >Buy it Now <Icon as={ArrowForwardIcon} />  </Button>
            </Box>)
            }
           
        </Box>
        
        <Box position={"relative"} >
        <Image src="https://i.ebayimg.com/images/g/DhYAAOSwH99j7e1j/s-l1600.webp" ></Image>
        {
            !isSecondSmallScreen ? (
                <Box position={"absolute"} top="0" left="0" padding={"1rem"} >
                <Heading color={"Green.800"} fontSize="40px" fontWeight="bold"  >
                Bikes & Cycling
                <br/>
                Equipment
                </Heading>
                <Text m={1} fontWeight={"bold"} >Save on bicycles</Text>
                <Button  colorScheme='white' borderRadius={"1%"} variant='outline' >Shop Now <Icon as={ArrowForwardIcon} />  </Button>
            </Box>
            ) : (
        <Box position={"absolute"} top="0" left="0" padding={"1rem"} >
            <Heading color={"Green.800"} fontSize="20px" fontWeight="bold"  >
            Bikes & Cycling
            <br/>
            Equipment
            </Heading>
            
            
        </Box>
            )
        }
        

        </Box>
    </div>
  )
}

export default BigSquare