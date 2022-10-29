import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";

const Enquires = () => {
  return (
    <Box>
      <Text
        textAlign="center"
        fontFamily="Playfair Display"
        my="30px"
        fontSize="30px"
      >
        For Enquires:
      </Text>

      <Flex
        alignItems="center"
        justifyContent="center"
        display={{
          sm: "block",
          md: "block",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        textAlign="center"
      >
        <Box
          mr={{
            sm: "0",
            md: "0",
            lg: "50px",
            xl: "65px",
            "2xl": "80px",
          }}
        >
          <Heading fontFamily="Playfair Display" fontSize="25px">
            Email:
          </Heading>

          <Box pt="10px">
            <Text fontFamily="Manrope">info@wavecrest.edu.ng</Text>
            <Text fontFamily="Manrope">wavecrestadmissions@gmail.com</Text>
          </Box>
        </Box>

        <Box
          mt={{
            sm: "30px",
            md: "30px",
            lg: "0",
            xl: "0",
            "2xl": "0",
          }}
        >
          <Heading fontFamily="Playfair Display" fontSize="25px">
            Phone Number:
          </Heading>
          <Box pt="10px">
            <Text fontFamily="Manrope">+234 808 396 4840</Text>
            <Text fontFamily="Manrope">+234 909 685 6606 </Text>
          </Box>
        </Box>
      </Flex>

      <Heading></Heading>
    </Box>
  );
};

export default Enquires;
