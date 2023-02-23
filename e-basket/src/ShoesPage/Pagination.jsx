import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({current,handleClick,LastPage, HandleChange }) => {
  
    let pages = new Array(LastPage).fill(0).map((a,i)=>{
    return <Button colorScheme='blue' variant='link'
    onClick={()=>HandleChange(i+1)}
    isDisabled={current==i+1}
    key={i+1}
    >
        {i+1}
    </Button>
  })
    return (
    <div>
        <Button colorScheme='blue' variant='link' isDisabled={current==1} onClick={()=>handleClick(-1)} >Pre</Button>
            <span>{pages}</span>
        {/* <Button>{current}</Button> */}
        <Button colorScheme='blue' variant='link' isDisabled={current==LastPage} onClick={()=>handleClick(+1)} >Next</Button>
    </div>
  )
}

export default Pagination