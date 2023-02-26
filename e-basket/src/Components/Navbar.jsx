import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import SearchBox from "../ShoesPage/SearchBox";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  // Update the isMobile state when the screen size changes
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add an event listener to handle screen size changes
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial isMobile state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      bg={useColorModeValue("WhiteAlpha.600", "WhiteAlpha.600")}
      color={useColorModeValue("WhiteAlpha.600", "WhiteAlpha.600")}
      minH={"50px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("WhiteAlpha.600", "WhiteAlpha.600")}
      align={"center"}
     
    >
      <Flex
        flex={{ base: 1, md: "auto" }}
        ml={{ base: -2 }}
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        <Link to={"/"} >
        <Box>
          <Image src="logo192.png" alt="logo" width={"100px"} _hover={{ textDecoration: "none" }}>
          
          </Image>
        </Box>
        </Link>
        {isMobile ? (
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        ) : (
          <DesktopNav />
        )}
      </Flex>
    </Flex>
  );
}

const DesktopNav = () => {
  return (
    <Stack align={"center"} fontSize={"md"}  color="gray" direction={"row"} spacing={9}>
      <Button as={"a"} variant={"link"} href={"/"} _hover={{ textDecoration: "none" }}>
      </Button>
     
      <Link to={"/shoes"} >
        Shoes
      </Link>
      <Link to={"/laptop"} >
        laptop
      </Link>
      <Link to={"/shoes"} >
        Shoes
      </Link>
      <Link to={"/shoes"} >
        Shoes
      </Link>
    <SearchBox/> 
    <Link to={"/cart"} >Cart</Link>
      {/* <Button as={"a"} variant={"link"} href={"/services"} _hover={{ textDecoration: "none" }}>
        Services
      </Button>
      <Button as={"a"} variant={"link"} href={"/contact"} _hover={{ textDecoration: "none" }}>
        Contact
      </Button> */}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack spacing={4}>
      <Button w={"full"} variant={"link"} href={"/"} _hover={{ textDecoration: "none" }}>
        Home
      </Button>
      <Button w={"full"} variant={"link"} href={"/about"} _hover={{ textDecoration: "none" }}>
        About
      </Button>
      <Button w={"full"} variant={"link"} href={"/services"} _hover={{ textDecoration: "none" }}>
        Services
      </Button>
      <Button w={"full"} variant={"link"} href={"/contact"} _hover={{ textDecoration: "none" }}>
        Contact
      </Button>
      
    </Stack>
  );
};

