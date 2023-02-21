import React, { useEffect, useState } from 'react'
import { Box, Image, Text, Flex } from '@chakra-ui/react'
import axios from "axios"
const Smartphones = () => {
    const [data, setData] = useState([])
    const getData = () => {
        return axios.get((`https://ebasket.onrender.com/products`))
    }
    useEffect(() => {
        getData().then((res) => setData(res.data))
    }, [])
    return (
        <div>
            <Flex  >
                {
                    data?.map(({ title, description, price, brand, images }) => {
                        return <Box>
                            <Image boxSize='200px'objectFit="contain" src={images[0]} ></Image>
                            <Text>{title}</Text>
                            <Text>{price}</Text>
                            <Text>{brand}</Text>

                        </Box>
                    })
                }
            </Flex>
        </div>
    )
}

export default Smartphones