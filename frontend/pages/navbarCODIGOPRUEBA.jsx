import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Button,
  useColorModeValue,
  Link,
  Container,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
  Divider,
  Stack,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const navBg = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const linkColor = useColorModeValue("myColor.Snow", "myColor.Snow");
  const singIColor = useColorModeValue("myColor.Aqua", "myColor.Aqua");

  return (
    <Box>
      {/* Header */}
      <Box px={36} py={2} bg={navBg}>
        <Flex alignItems="center">
          <Link href="/">
            <Image
              src="/Sportify.png"
              alt="logo"
              width="100px"
              height="100px"
              borderRadius="full"
              objectFit="cover"
            ></Image>
          </Link>
          <Spacer />
          <Box display={{ base: "none", md: "flex" }}>
            {" "}
            <NavItems linkColor={linkColor} />
          </Box>
          <Box ml={4}>
            <Link href="/login">
              <Button
                bg={singIColor}
                colorScheme="myColor.Aqua"
                borderRadius={"12px"}
                _hover={{
                  cursor: "pointer",
                  fontSize: "xl",
                }}
              >
                Iniciar Sesión
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
const NavItems = ({ linkColor }) => {
  return (
    <Flex alignItems="center">
      <Link
        href="/Conócenos"
        mr={4}
        fontWeight="normal"
        fontSize="2xl"
        color={linkColor}
        _hover={{
          textDecoration: "none",
          color: "myColor.Aqua",
          fontSize: "3xl",
        }}
      >
        Conócenos
      </Link>
      <Link
        href="/contacto"
        mr={4}
        fontWeight="normal"
        fontSize="2xl"
        color={linkColor}
        _hover={{
          textDecoration: "none",
          color: "myColor.Aqua",
          fontSize: "3xl",
        }}
      >
        Contacto
      </Link>
      <Link
        href="/faq"
        fontWeight="normal"
        fontSize="2xl"
        color={linkColor}
        _hover={{
          textDecoration: "none",
          color: "myColor.Aqua",
          fontSize: "3xl",
        }}
      >
        FAQ
      </Link>
    </Flex>
  );
};
export default Navbar;
