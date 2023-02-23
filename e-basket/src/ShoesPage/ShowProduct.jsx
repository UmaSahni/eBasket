import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ShowProduct = ({title,thumbnail,description,price,rating,brand}) => {
  return (
    <Card maxW='300px'>
  <CardBody>
    <Box boxSize={"200px"} >
    <Image
      src={thumbnail}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
     
    />
    </Box>
    <Stack mt='6' spacing='1'>
      <Heading size='md'>{title}</Heading>
     
      <Text color='blue.600' fontWeight={"bold"} fontSize='2xl'>
        $ {price}
      </Text>
      <Text color='gray.500' >
       Brand - {brand}
      </Text>
      <Text color='gray.600' >
        Free Shipping
      </Text>
      <Text color='red' >
        {
          Math.ceil(Math.random() * 4000)  
        }
       {" "} items sold
      </Text>
    </Stack>
  </CardBody>
 
</Card>
  )
}

export default ShowProduct