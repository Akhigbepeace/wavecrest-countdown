import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Index from "./components/Index";

function App() {
  const breakpoints = {
    sm: "320px",
    md: "500px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1440px",
  };

  const theme = extendTheme({ breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Index />
    </ChakraProvider>
  );
}

export default App;
