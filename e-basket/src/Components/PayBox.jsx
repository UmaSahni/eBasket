import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, Code, Divider, Link, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AppCartContext } from '../Context/CartContext'
import ModalPayment from './ModalPayment'
import SpinnerPayment from './SpinnerPayment'

const PayBox = () => {
    const {state, dispatch} = useContext(AppCartContext)
    return (
    <div>
        <Box p="3" w={"20vw"}  border={"1px solid #E2E8F0"} >
            <Text>Items: {state.length} </Text>
            <Text>Shipping: free</Text>
            <Divider mt={"3"} mb={"3"}/>
            <Text p="3" fontSize={"xs"} backgroundColor={"gray.100"} >By placing your order, you agree to eBasket's <Link href='https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259' isExternal>User Agreement <ExternalLinkIcon mx='2px'/> </Link>   </Text>
            <Text fontWeight="bold" mb="2">
            Total: ${state.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
          </Text>
          <ModalPayment/>
          {/* <Button onClick={()=> <SpinnerPayment/> } width={"100%"} colorScheme="blue" >Pay Now</Button> */}
        </Box>
    </div>
  )
}

export default PayBox