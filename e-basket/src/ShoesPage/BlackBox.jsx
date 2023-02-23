import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'
const BlackBox = () => {
 const [isSmallScreen] = useMediaQuery(`(min-width: 480px)`)
    return (
     <div>

     <Stack marginBottom={8} direction={['column', 'row']} spacing={"-10px"} >
         <Box color={"white"} p={"2rem"}  w='650px' h="300px" bg='black'>
            <Heading >Men sneakers</Heading>
            <Heading fontSize={"lg"}  >Take 15%* off!</Heading>
            <Box  marginTop={"7"} >
                <Text>Click to copy coupon</Text>
                <Button marginTop={"10px"}marginBottom={"10px"} colorScheme='black' width={"300px"} variant={"outline"} >SNEAKER23</Button>
                <Text>See Terms and Conditions</Text>
            </Box>
         </Box>
{
    isSmallScreen && <Image h={"300px"}  src="https://i.ebayimg.com/images/g/kR8AAOSw7RFj4YII/s-l1600.webp" ></Image>
}
     
     </Stack>
        </div>
)}

export default BlackBox