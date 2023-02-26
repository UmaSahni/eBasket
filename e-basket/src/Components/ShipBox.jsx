import { Box, Card, CardBody, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import  { AppCartContext } from '../Context/CartContext'

const ShipBox = () => {
  const {state, dispatch} = useContext(AppCartContext)
  console.log(state)
    return (
    <div>
        <Heading m={"3"} size={"sm"} >Review items and shipping</Heading>
        <Box>
            {
                state.map((el)=>{
                    return  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100%', sm: '200px' }}
                      src={el.thumbnail}
                      alt='Caffe Latte'
                    />
                  
                    <Stack>
                      <CardBody>
                        <Heading size='md'>{el.title}</Heading>
                  
                        <Text py='2'>
                          {el.description}
                        </Text>
                        <HStack spacing={3} >
                        <Text py='2'>
                        Price: $ {el.price}
                        </Text>
                        <Text py='2'>
                        Quantity: {el.quantity}
                        </Text>
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                    
                })
            }
        </Box>
    </div>
  )
}

export default ShipBox