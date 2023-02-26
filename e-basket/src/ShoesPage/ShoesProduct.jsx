import { Box, Center, Divider, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'

import { useEffect } from 'react';
import ShowProduct from './ShowProduct';
import Pagination from './Pagination';
import { Link, useSearchParams } from "react-router-dom";
import { GetShoes } from '../ApiRequest';
import { ShoesContext } from '../Context/ShoesContext';
import SearchBoxFun from './SearchBox';

// const convertToNum = (page) =>{
//   if(NaN || 0<=page || typeof (page) === "string" || null){
//     return page = 1
//   } else{
//     return +page
//   }
// }


const ShoesProduct = () => {
  const {data,LastPage, HandleChange,handleClick,page} = useContext(ShoesContext)
  
    return (
    <div >
      <Box marginBottom={"3"} >
        <SearchBoxFun/>
      </Box>
        <Grid templateColumns={{ base:"1", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
        {
            data?.map((el)=> <GridItem> <Link to={`/shoes/${el.id}`} > <ShowProduct key={el.id} {...el}/> </Link> </GridItem>)
        }
        </Grid>
        <Divider marginTop={"8"} />
        <Center marginTop={"4"} >
        <Pagination LastPage={LastPage} HandleChange={HandleChange} handleClick={handleClick} current={page} />
        </Center>
    </div>
  )
}

export default ShoesProduct