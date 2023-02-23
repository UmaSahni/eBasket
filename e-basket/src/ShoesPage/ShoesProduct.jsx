import { Box, Center, Divider, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import ShowProduct from './ShowProduct';
import Pagination from './Pagination';
const GetShoes = (page) =>{
  return  axios.get(`https://ebasket.onrender.com/mens-shoes?_page=${page}&_limit=8`)
}
const ShoesProduct = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    GetShoes(page).then((res)=>{
      setTotal(res.headers.get("x-total-count"))
      return setData(res.data)
    })

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