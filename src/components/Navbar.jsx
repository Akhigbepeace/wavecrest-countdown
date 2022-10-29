import { Box, Flex, Stack, Image, Link } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/logo_wavecrest.svg";
import Linked from "../assets/linked.png";
import Whatapps from "../assets/whatsapp.png";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/ig.svg";

const Navbar = () => {
  const socials = [
    {
      icon: Linked,
      to: "https://www.linkedin.com/company/wavecrest-college-of-hospitality/",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: Facebook,
      to: "https://web.facebook.com/WavecrestCollegeLagos/",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: Twitter,
      to: "https://twitter.com/WaveColl",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: Whatapps,
      to: "https://wa.me/+2349096856606",
      target: "_blank",
      rel: "noreferrer",
    },

    {
      icon: Instagram,
      to: "http://instagram.com/wavecrestcollege",
      target: "_blank",
      rel: "noreferrer",
    },
  ];
  return (
    <Flex
      alignItems="center"
      bg="#FFF"
      justifyContent="space-between"
      p="29px 91px"
      display={{
        sm: "block",
        md: "block",
        lg: "flex",
        xl: "flex",
        "2xl": "flex",
      }}
      w={{
        sm: "300px",
        md: "400px",
        lg: "800px",
        xl: "1000px",
        "2xl": "1200px",
      }}
      mx="auto"
    >
      <Box cursor="pointer">
        <Image w="238px" h="52px" src={Logo} />
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        mt={{
          sm: "20px",
          md: "20px",
          lg: "0",
          xl: "0",
          "2xl": "0",
        }}
      >
        {socials.map((social, index) => {
          return (
            <Link
              key={index}
              href={social.to}
              target={social.target}
              rel={social.rel}
              h="34px"
            >
              <Image src={social.icon} w="34px" />
            </Link>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default Navbar;
