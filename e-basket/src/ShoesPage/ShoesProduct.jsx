import { Box, Center, Divider, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'

import { useEffect } from 'react';
import ShowProduct from './ShowProduct';
import Pagination from './Pagination';
import { useSearchParams } from "react-router-dom";
import { GetShoes } from '../ApiRequest';

const convertToNum = (page) =>{
  if(NaN || 0<=page || typeof (page) === "string" || null){
    return page = 1
  } else{
    return +page
  }
}


const ShoesProduct = () => {
  const [data, setData] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState( convertToNum (searchParams.get ("page")))
  const [total, setTotal] = useState(0)
  console.log( searchParams.get (("page")))
  useEffect(()=>{
    GetShoes(page).then((res)=>{
      setTotal(res.headers.get("x-total-count"))
      return setData(res.data)
    })

  },[page])

  useEffect(()=>{
    const paramObj = {page:page}
    setSearchParams(paramObj)
  },[page])
  
  
  const LastPage = Math.ceil(total/8)
  const handleClick = (val) =>{
  setPage(page+val)
  }
  const HandleChange = (val) =>{
    setPage(val)
  }
    return (
    <div >
        <Grid templateColumns={{ base:"1", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
        {
            data?.map((el)=> <GridItem><ShowProduct key={el.id} {...el}/></GridItem>)
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