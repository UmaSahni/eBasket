import React, { useState } from "react";
import { Box, Button, Center, Flex, Image, Stack } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://picsum.photos/id/1015/400/200",
  "https://picsum.photos/id/1016/400/200",
  "https://picsum.photos/id/1018/400/200",
  "https://picsum.photos/id/1019/400/200",
  "https://picsum.photos/id/1020/400/200",
  "https://picsum.photos/id/1021/400/200",
  "https://picsum.photos/id/1022/400/200",
  "https://picsum.photos/id/1023/400/200",
  "https://picsum.photos/id/1024/400/200",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 < 0 ? images.length - 4 : prevIndex - 4));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4 >= images.length ? 0 : prevIndex + 4));
  };

  const displayedImages = images.slice(currentIndex, currentIndex + 4);

  return (
    <Box position="relative">
      <Flex alignItems="center" justifyContent="space-between" mb={2}>
        <Button variant="ghost" onClick={handlePrevClick} leftIcon={<FaChevronLeft />} />
        <Center w="50%">
          <Stack direction="row" spacing={4}>
            {displayedImages.map((imageUrl, index) => (
              <Center key={index} w="25%">
                <Image  src={imageUrl} alt={`Image ${currentIndex + index}`} />
              </Center>
            ))}
          </Stack>
        </Center>
        <Center w="25%">
          <Button variant="ghost" onClick={handleNextClick} rightIcon={<FaChevronRight />} />
        </Center>
      </Flex>
    </Box>
  );
}

export default ImageSlider;
