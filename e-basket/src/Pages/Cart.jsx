import { Box, Button, Heading, Image, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppCartContext } from "../Context/CartContext";
import { ShoesContext } from "../Context/ShoesContext";

function CartPage() {
//   const cartItems = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 9.99,
//       quantity: 2,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 19.99,
//       quantity: 1,
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 14.99,
//       quantity: 3,
//     },
//   ];

const {state, dispatch} = useContext(AppCartContext)
const {qty} = useContext(ShoesContext)
  const tableSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box maxW="1200px" mx="auto" my="4">
      <Heading size="lg" mb="4">
        Shopping Cart
      </Heading>
      <Table variant="simple" size={tableSize}>
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Title</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Price</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {state.map((item) => (
            <Tr key={item.id}>
              <Td> <Image width={"100px"} src={item.thumbnail} /> </Td>
              <Td> {item.title}</Td>
              {/* Increase Button */}
              <Td> <Button variant='outline' 
              onClick={()=>dispatch({type:"INCREASEQTY", payload: item })}
              >+</Button> {item.quantity} 
              {/* Decrement Button */}
                {/* {
                    item.quantity<=0 ? <Button variant='outline' 
                    onClick={()=>dispatch({type:"REMOVE", payload:item})}
                    >-</Button> : <Button variant='outline' 
                    onClick={()=>dispatch({type:"DECREASEQTY", payload:item})}
                    >-</Button>
                } */}
              
              <Button variant='outline' 
              onClick={()=>
                {
                  if(item.quantity>1){
                    dispatch({type:"DECREASEQTY", payload:item})
                  } 
                  else{
                    dispatch({type:"REMOVE", payload:item})
                  }
                }
              }
              >-</Button>  
              </Td>
              
              <Td isNumeric>{item.price * item.quantity}</Td>
              <Td>
                <Button onClick={()=>dispatch({type:"REMOVE", payload:item})} variant="ghost" size="sm" colorScheme="red" aria-label={`Remove ${item.name}`} leftIcon={<FaTrash />}>
                  Remove
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Stack direction={{ base: "column", md: "row" }} justify="flex-end" mt="4">
        <Box>
          <Text fontWeight="bold" mb="2">
            Total: ${state.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
          </Text>
          <Link to="/payment" >
          <Button  colorScheme="blue" mr={{ base: 0, md: "2" }} mb={{ base: "2", md: 0 }}>
            Checkout
          </Button>
          </Link>
          <Button variant="ghost">Continue Shopping</Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default CartPage;
