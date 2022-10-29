import { Box } from "@chakra-ui/react";
import React from "react";
import CountdownTimer from "./CountdownTimer";
import Enquires from "./Enquires";
import Navbar from "./Navbar";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <CountdownTimer />
      <Enquires />
    </Box>
  );
};

export default Index;
