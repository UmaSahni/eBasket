import { Image,Box, Heading, Flex, Wrap, WrapItem, Center, Spacer,  } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { wrap } from 'framer-motion'
import React from 'react'

const imagesList = [
  {
    src : "https://i.ebayimg.com/images/g/xNwAAOSwYlNjwUvO/s-l225.webp",
    alt : "latest laptops",
    price : "$ 6999",
    discount : "77 % OFF"
  },
  {
    "src" : "https://i.ebayimg.com/thumbs/images/g/jBwAAOSwimlioR-E/s-l225.webp",
    "alt" : "Samart Phone",
    "price" : "$ 499",
    "discount" : "77 % OFF"
  }, 
  {
    "src" : "https://i.ebayimg.com/thumbs/images/g/UvMAAOSwamxhwtWm/s-l200.webp",
    "alt" : "Men's Watch",
    "price" : "$ 54",
    "discount" : "77 % OFF"
  }, {
    "src" : "https://i.ebayimg.com/thumbs/images/g/NAMAAOSwsXRiyU2l/s-l200.webp",
    "alt" : "Sun Glasses",
    "price" : "$ 13",
    "discount" : "77 % OFF"
  }, {
    "src" : "https://i.ebayimg.com/thumbs/images/g/NswAAOSwFLtjVfgJ/s-l200.webp",
    "alt" : "Men's Shoes",
    "price" : "$ 6999",
    "discount" : "77 % OFF"
  }

  ]
const DailyDeals = () => {
  
 
  
  return ( 
    <Box>
      <Heading m={"3"} size={"md"}> Daily Deals | See All <Icon as={ArrowForwardIcon} />  </Heading>
     <Wrap justify="space-around"  >
      {
        imagesList.map((el)=>{
          return   <Box border={"1px solid red"} > 
            <Box width={"200px"} height="200px"  > <Image src={el.src} alt={el.alt} /> </Box>
            <Box textAlign={"center"} >
            <Heading size='sm' >{el.alt}</Heading>
            <Heading size='sm' >{el.price}</Heading>
            <Heading size='sm' >{el.discount}</Heading>
            </Box>
            </Box>
            
        })
      }
    </Wrap>
    </Box>
    
  )
}

export default DailyDeals