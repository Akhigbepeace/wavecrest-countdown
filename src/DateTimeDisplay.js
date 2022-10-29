import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <Text fontFamily="Playfair Display">{value}</Text>
      <Heading fontFamily="Manrope">{type}</Heading>
    </div>
  );
};

export default DateTimeDisplay;
