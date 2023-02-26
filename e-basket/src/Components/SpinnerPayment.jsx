import { useState, useEffect } from "react";
import { Spinner, CheckIcon, Text, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'
export default  function SpinnerPayment() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showSpinner ? (
        <Box>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
        <Text mt={"3"} >Please wait !</Text>
        </Box>
      ) : (
        <Box>
        <CheckCircleIcon color="green.500" boxSize="50" />
        <Text mt={"3"} >Payment Completed !</Text>
        </Box>
      )}
    </>
  );
}
