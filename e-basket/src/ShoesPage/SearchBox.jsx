import { Box, Button, Center, Input, Stack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ShoesContext } from '../Context/ShoesContext'

const SearchBox = () => {
  
  const {handleSerach,setQuery, query} = useContext(ShoesContext)
  console.log(query)
  return (
   <Stack  spacing='4' direction={['column', 'row']} >
    
    <Box width={"80%"} >
      <Input  onChange={(e)=>setQuery(e.target.value)}  width={"100%"} value={query} placeholder='Search here' />
    </Box>
    
    <Box width={"20%"} >
      <Button onClick={handleSerach}  >Search</Button>
    </Box>
   </Stack>
  )
}

export default SearchBox