import React, { useEffect, useState } from 'react'
import { Box, Image, Text, Flex, Button } from '@chakra-ui/react'
import axios from "axios"
const Smartphones = () => {
    const [data, setData] = useState([])
    const getData = () => {
        return axios.get((`https://ebasket.onrender.com/smartphones`))
    }
    useEffect(() => {
        getData().then((res) => setData(res.data))
    }, [])
    
    // axios.post(`https://ebasket.onrender.com/smartphones`,{
    //     image:`https://i.ebayimg.com/images/g/MPwAAOSwCChjmIPZ/s-l500.jpg`
    // })

const handleDelete =(id) =>{
return axios({
    method:"delete",
    url:`https://ebasket.onrender.com/smartphones/${id}`
})
}

    return (
        <div>
            <Flex  >
                {
                    data?.map(({ title, description, price, brand, thumbnail,id }) => {
                        return <Box>
                            <Image boxSize='200px'objectFit="cover" src={thumbnail} ></Image>
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