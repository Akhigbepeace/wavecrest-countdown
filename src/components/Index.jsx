import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import CountdownTimer from "../CountdownTimer";
import Enquires from "./Enquires";
import Navbar from "./Navbar";

const Index = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

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
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
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
