import { Box } from '@chakra-ui/react'
import React from 'react'
import ImageCarousel from '../Components/ImageCarousel'
import Navbar from '../Components/Navbar'
import DailyDeals from '../Homepage/DailyDeals'

const Home = () => {
  return (
    <Box width={"95%"} margin="auto" >
   <Navbar/>
   <ImageCarousel/>
   <DailyDeals/>
   </Box>
  )
}

export default Home