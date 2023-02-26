import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Select,
  Input
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { useContext, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import {  useParams } from 'react-router-dom';
import Carousel2 from '../Components/Carousel2';
import ImageCarousel from '../Components/ImageCarousel';
import { ShoesContext } from '../Context/ShoesContext';
import { AppCartContext } from '../Context/CartContext';
export default function Simple() {
  const {userid} = useParams()
   
  const {SingleDetailsPage, qty, setqty, singleData} = useContext(ShoesContext)
  useEffect(()=>{
    SingleDetailsPage(userid)
  },[])
  const {state, dispatch} = useContext(AppCartContext)
  console.log(state, "this is cart state")
const {title, description,price,discountPercentage,rating,stock,brand,category,thumbnail} = singleData

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
        <Carousel2/>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
             {title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                 {description}
              </Text>
             
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={`#4299E1`}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Brand: {brand}</ListItem>
                  <ListItem>Rating: {rating}</ListItem>{' '}
                  <ListItem>Stock: {stock}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={'#4299E1'}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <Stack>
                <Select placeholder='Select Color' >
                <option value='option1'>Black Color</option>
                <option value='option1'>Gray Color</option>
                <option value='option1'>White Color</option>
                <option value='option1'>Blue Color</option>
                <option value='option1'>Yellow Color</option>
                </Select>
              </Stack>
              <Stack mt={"3"} >
                <Select placeholder='Select Size' >
                <option value='option1'>7</option>
                <option value='option1'>7.5</option>
                <option value='option1'>8</option>
                <option value='option1'>8.5</option>
                <option value='option1'>9</option>
                </Select>
              </Stack>
              <Stack mt={"3"} >
              <Input value={qty} onChange={(e)=>setqty(e.target.value)} placeholder='Quantity -- By default 1' />
              </Stack>
              {/* <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List> */}
            </Box>
          </Stack>
           
          <Stack>
          <Button p={"2"} width={"45%"} rounded={"50"} backgroundColor="#2C5282" colorScheme='blue' >
            Buy it Now
          </Button>
          <Button  p={"2"} width={"45%"} rounded={"50"} colorScheme='blue'
          onClick={()=>dispatch({type:"AddTOCART", payload:singleData})}
          >
            Add to cart
          </Button>
          <Button  p={"2"} width={"45%"} variant='outline' rounded={"50"} colorScheme='blue' >
          <StarIcon m={"1"} />   Add to Watchlist
          </Button>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}