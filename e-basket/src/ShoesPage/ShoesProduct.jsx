import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import ShowProduct from './ShowProduct';
const GetShoes = () =>{
  return  axios.get(`https://ebasket.onrender.com/mens-shoes`)
}
const ShoesProduct = () => {
  const [data, setData] = useState([])
 useEffect(()=>{
 GetShoes().then((res)=>setData(res.data))
  },[])
    return (
    <div >
        <SimpleGrid minChildWidth='250px' spacing='10px'  >
        {
            data?.map((el)=> <ShowProduct key={el.id} {...el}/>)
        }
        </SimpleGrid>
    </div>
  )
}

export default ShoesProduct