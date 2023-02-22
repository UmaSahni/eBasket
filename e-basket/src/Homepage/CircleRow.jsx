import { Image,Box, Heading, Flex, Wrap, WrapItem, Center, Spacer,  } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { wrap } from 'framer-motion'

import React from 'react'
const imagesList = [
    {
        title:"Shoes",
        src:"https://i.ebayimg.com/images/g/hIgAAOSwyTtcJkbp/s-l200.webp"
    },{
        title:"Watches",
        src:"https://i.ebayimg.com/images/g/kEwAAOSwnZJcG8vM/s-l200.webp"
    },{
        title:"Fasion",
        src:"https://i.ebayimg.com/images/g/FVIAAOSwFURcG8vK/s-l200.webp"
    },{
        title:"Laptop",
        src:"https://i.ebayimg.com/images/g/gE4AAOSwgnJcG8vI/s-l200.webp"
    },{
        title:"Toys",
        src:"https://i.ebayimg.com/images/g/MyIAAOSwsrlcG8vM/s-l200.webp"
    },{
        title:"Mobile",
        src:"https://i.ebayimg.com/images/g/WREAAOSwh7tcG8vJ/s-l200.webp"
    },
    {
        title:"Kitchen",
        src:"https://i.ebayimg.com/images/g/idwAAOSwgcdcG8vJ/s-l200.webp"
    },
]
const CircleRow = () => {
  return (
    <Box marginBottom={8} >
      <Heading m={"3"} size={"md"}> Popular Destinations | See All <Icon as={ArrowForwardIcon} />  </Heading>
     <Wrap justify="space-around"  >
      {
        imagesList.map((el)=>{
          return   <Box  > 
            <Box width={"150px"} height="150px"  > <Image src={el.src} alt={el.alt} /> </Box>
            <Box textAlign={"center"} >
            <Heading size='sm' >{el.title}</Heading>
            </Box>
            </Box>
            
        })
      }
    </Wrap>
    </Box>
  )
}

export default CircleRow