import { Box, Flex, Grid, GridItem, HStack, SimpleGrid, Spacer, VStack } from '@chakra-ui/react'
import React from 'react'
import BlackBox from '../ShoesPage/BlackBox'
import CatBox from '../ShoesPage/CatBox'
import ShoesProduct from '../ShoesPage/ShoesProduct'

const Shoes = () => {
  return (
    <div style={{width:"90%" , margin:"auto"}}  >
        <BlackBox/>
        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' > <CatBox/></GridItem>
            <GridItem colSpan={4}><ShoesProduct/></GridItem>
        </Grid>
       
        
    </div>
  )
}

export default Shoes