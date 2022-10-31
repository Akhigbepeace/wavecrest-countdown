import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CountdownTimer from "../CountdownTimer";
import Enquires from "./Enquires";
import Navbar from "./Navbar";

const Index = () => {
  const dateTimeAfterOneDay = 1667260800000;

  return (
    <Box>
      <Navbar />
      <Box bg="#021D37" color="#FFF" py="50px" textAlign="center">
        <Box
          w={{
            sm: "250px",
            md: "350px",
            lg: "800px",
            xl: "1000px",
            "2xl": "1200px",
          }}
          mx="auto"
        >
          <Heading pb="60px" fontFamily="Playfair Display">
            Countdown To Launch Of New Website
          </Heading>
          <CountdownTimer targetDate={dateTimeAfterOneDay} />
        </Box>
      </Box>
      <Enquires
        w={{
          sm: "300px",
          md: "200px",
          lg: "700px",
          xl: "700px",
          "2xl": "1200px",
        }}
        mx="auto"
      />
    </Box>
  );
};

export default Index;
