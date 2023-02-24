import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { GetShoes } from '../ApiRequest'
const CatBox = () => {
 const handlePrice = () =>{
  
 }
  return (
    <div>
        <Box width={"200px"} height={"100vh"}  >
          <Heading>Categories</Heading>
          <Button onClick={()=>handlePrice} >Price</Button>
        </Box>
    </div>
  )
}

export default CatBox