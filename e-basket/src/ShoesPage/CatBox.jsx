import { Box, Button, Center, Checkbox, Flex, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GetShoes } from '../ApiRequest'
import { ShoesContext } from '../Context/ShoesContext'
const CatBox = () => {
  const { setOrderBy, handleChangeBrand,handleResetBrand } = useContext(ShoesContext)

  return (
    <div>
      <Center>
        <Box m={"auto"} width={"200px"} height={"100vh"}  >
          <Text marginTop={"1"} fontSize={"lg"} textAlign={"center"} >Apply Filter</Text>
          <Button marginTop={"1"} width={"100%"} colorScheme='blue' variant='outline' onClick={() => setOrderBy("asc")} >Price Low to High</Button>
          <Button marginTop={"1"} width={"100%"} colorScheme='blue' variant='outline' onClick={() => setOrderBy("desc")} >Price High to Low</Button>
       
          <Box p={"2"} borderRadius={"7"} m={"2"} border={"1px solid #2B6CB0"}   >
          <Text marginTop={"1"} fontSize={"lg"} textAlign={"center"} >Filter by Brand</Text>
            <VStack spacing={[1, 5]}>
             
              <Checkbox  onChange={() => handleChangeBrand("Sneakers")} size='md' colorScheme='blue' >
                Sneakers
              </Checkbox>
              <Checkbox onChange={() => handleChangeBrand("The Warehouse")} size='md' colorScheme='blue' >
                Warehouse
              </Checkbox>
             
              <Checkbox onChange={() => handleChangeBrand("Rubber")} size='md' colorScheme='blue' >
                Rubber
              </Checkbox>
            </VStack>
            </Box>
        </Box>

      </Center>
    </div>
  )
}

export default CatBox