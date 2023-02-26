import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Button,
  } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import SpinnerPayment from './SpinnerPayment'
 
 
 export default function ModalPayment() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
          Some other content that'll receive focus on close.
        </Box>
  
        <Button  width={"100%"} colorScheme="blue" mt={4} onClick={onOpen}>
         Pay Now
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Status</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <SpinnerPayment/>
            </ModalBody>
  
            <ModalFooter>
              <Button variant='outline'  mr={3} onClick={onClose}>
                Close
              </Button>
              <Link to={"/"} >
              <Button  variant='outline' colorScheme='blue' >Back To Home</Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }