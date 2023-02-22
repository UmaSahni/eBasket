import React from 'react'
import { Box,Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
    {
      url: "https://i.ebayimg.com/images/g/OoYAAOSwHCtj80NX/s-l1600.webp",
      alt: "Image 1",
      caption: "Caption for image 1",
    },
    {
      url: "https://i.ebayimg.com/images/g/9DIAAOSwq-Fj7Z56/s-l1600.webp",
      alt: "Image 2",
      caption: "Caption for image 2",
    },
    {
      url: "https://i.ebayimg.com/images/g/DhYAAOSwH99j7e1j/s-l960.webp",
      alt: "Image 3",
      caption: "Caption for image 3",
    },
  ];
  
const ImageCarousel = () => {
    
    return (
      <Box w="100%"  position="relative">
      <Carousel showArrows={true} infiniteLoop={true}>
        {images.map((image, index) => (
          <Box key={index}>
            <img src={image.url} alt={image.alt} />
            {/* <Text position="absolute" bottom="0" left="50%" transform="translateX(-50%)" color="white" fontWeight="bold" fontSize="lg" bg="rgba(0, 0, 0, 0.5)" p={2}>
              {image.caption}
            </Text> */}
          </Box>
        ))}
      </Carousel>
    </Box>
 
      );
}

export default ImageCarousel