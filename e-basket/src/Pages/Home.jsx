import { Box } from '@chakra-ui/react'
import React from 'react'
import ImageCarousel from '../Components/ImageCarousel'
import Navbar from '../Components/Navbar'
import BigSquare from '../Homepage/BigSquare'
import CircleRow from '../Homepage/CircleRow'
import DailyDeals from '../Homepage/DailyDeals'
import OrangeBox from '../Homepage/OrangeBox'


const Home = () => {
  return (
    <Box width={"95%"} margin="auto" >
   
   <ImageCarousel/>
   <DailyDeals/>
   <OrangeBox/>
   <CircleRow/>
   <BigSquare/>
   
   </Box>
  )
}

export default Home