import React, { useContext, useEffect, useState } from 'react'
import { Box,Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ShoesContext } from '../Context/ShoesContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';


  
const Carousel2 = () => {
   
  const {userid} = useParams()
   
  const {SingleDetailsPage, singleData} = useContext(ShoesContext)
  useEffect(()=>{
    SingleDetailsPage(userid)
  },[])

  
    return (
      <Box w="100%"  position="relative">
      <Carousel showArrows={true} infiniteLoop={true}>
        {singleData?.images?.map((image, index) => (
          <Box key={index}>
            <img src={image} alt={image.alt} />
            {/* <Text position="absolute" bottom="0" left="50%" transform="translateX(-50%)" color="white" fontWeight="bold" fontSize="lg" bg="rgba(0, 0, 0, 0.5)" p={2}>
              {image.caption}
            </Text> */}
          </Box>
        ))}
      </Carousel>
    </Box>
 
      );
}

export default Carousel2