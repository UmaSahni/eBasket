import { Box, Center, Divider, Heading, HStack, Image, Radio, RadioGroup, Stack, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import PayBox from './PayBox'
import ShipBox from './ShipBox'


const Payment = () => {
    const [value, setValue] = React.useState('1')
    return (
        <Box  >
    <Center  >
        <HStack>
        <Image width={"200px"} src="logo192.png" ></Image>
        <Heading>Checkout</Heading>
       </HStack>
    </Center>
    <Center>
        {/* border={"1px solid green"} */}
        <Box      >
        <Wrap  >
        <WrapItem>
            <Box p={"4"} width="40vw" h='auto' border={"1px solid #E2E8F0"} >
            
        
                <RadioGroup onChange={setValue} value={value}>
                <Stack>
                    <Text fontWeight={"bold"} value='1'>Pay with </Text>
                    <Divider/>
                    <Box h={"10vh"} >
                    <Radio value='2'>Pay with card</Radio>
                    <Image width={"50%"} src='https://www.peopletree.co.uk/Configuration/PeopleTree/Downloads/images/payment_logos_3.jpg' />
                    </Box>
                    <Divider/>
                    <Box h={"10vh"} >
                    <Radio value='3'> <Image width={"40%"} src="data:image/png;base64,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" ></Image> </Radio>
                    </Box>
                    <Divider/>
                    <Box h={"10vh"} >
                    <Radio value='4'><Image width={"30%"} src="https://pay.google.com/about/business/static/images/logos/logo-gp3.svg" /></Radio>
                    </Box>
                    <Divider/>
                    <Box h={"10vh"} >
                    <Radio value='5'><Image p={"3"} width={"30%"} src="https://m.media-amazon.com/images/G/31/lpa/in/common/assets/logo_amazonpay-primary-fullcolor-positive._CB1198675309_.png" /></Radio>
                    </Box>
                    <Divider/>
                </Stack>
                </RadioGroup>
           
            </Box>
        </WrapItem>
           
        <WrapItem>
            <Center  >
                     <PayBox/>
            </Center>
        </WrapItem>
        
        </Wrap>
        
          {/* Ship Box */}
            <Box mt={"4"} p={"4"} w='600px' border={"1px solid #E2E8F0"} >
            <ShipBox/>
            </Box>
       
        
        </Box>
    </Center>
        
    </Box>
    )
}

export default Payment



