import {
  chakra,
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
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const overviewList = [
  {
    id: 1,
    label: "Login once per day",
    subLabel: "The process should be quick.",
  },
  {
    id: 2,
    label: "Do your reviews",
    subLabel: "Reviews come from previous flashcards that you chose.",
  },
  {
    id: 3,
    label: "Streak increase",
    subLabel:
      "Your streak increases once per day as long as you finish your reviews.",
  },
  {
    id: 4,
    label: "Choose your lesson",
    subLabel: "This will add 5 new flashcards to your reviews.",
  },
];
const Navbar = () => {
  const navBg = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const linkColor = useColorModeValue("myColor.Snow", "myColor.Snow");
  const singIColor = useColorModeValue("myColor.Aqua", "myColor.Aqua");
  const singIColor2 = useColorModeValue(
    "myColor.LemonLime",
    "myColor.LemonLime"
  );

  return (
    <Box>
      {/* Header */}
      <Box px={36} py={2} bg={navBg}>
        <Flex alignItems="center">
          <Link href="/home">
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
          </Box>
        </Flex>
      </Box>
      {/* Banner */}
      <Flex
        height={"90vh"}
        width="100%"
        backgroundImage={
          " linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.40)), url(./background.png)"
        }
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundColor="rgba(0, 0, 0, 0.25)"
        p={8}
        fontFamily={"Inter"}
        align="center" // Center items vertically
        justify="center" // Center items horizontally
      >
        <Container maxW="6xl" bg="#f6f2f2" p={20} borderRadius={"md"}>
          <chakra.h2 fontSize="4xl" fontWeight="bold" textAlign="center" mb={8}>
            Como crear un partido?
          </chakra.h2>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 0, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            <VStack
              spacing={4}
              alignItems="flex-start"
              mb={{ base: 5, md: 0 }}
              maxW="md"
            >
              {overviewList.map((data) => (
                <Box key={data.id}>
                  <HStack spacing={2}>
                    <Flex
                      fontWeight="bold"
                      boxShadow="md"
                      color="white"
                      bg="myColor.Aqua"
                      rounded="full"
                      justifyContent="center"
                      alignItems="center"
                      w={10}
                      h={10}
                    >
                      {data.id}
                    </Flex>
                    <Text fontSize="xl">{data.label}</Text>
                  </HStack>
                  <Text fontSize="md" color="gray.500" ml={12}>
                    {data.subLabel}
                  </Text>
                </Box>
              ))}
            </VStack>
            <Image
              boxSize={{ base: "auto", md: "lg" }}
              objectFit="contain"
              src="/login.png"
              rounded="lg"
              borderRadius={"md"}
            />
          </Stack>
        </Container>
      </Flex>
      {/* Footer */}
      <Flex
        height="200px"
        bg="myColor.Eminence"
        fontSize="2xl"
        color="#ffffff"
        fontFamily="Inter"
      >
        <Stack
          direction="column" // Stacks the elements vertically
          width="33%"
          alignItems="center"
          justifyContent="center"
          fontSize="lg"
          spacing={2} // Adds spacing between the stacked elements
        >
          {" "}
          <Text>Enlaces</Text>
          <Divider orientation="horizontal" width="200px" borderWidth={2} />
          <Text
            _hover={{
              cursor: "pointer",
              fontSize: "xl",
            }}
          >
            Servicios
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              fontSize: "xl",
            }}
          >
            Contacto
          </Text>
          <Text
            _hover={{
              cursor: "pointer",
              fontSize: "xl",
            }}
          >
            FAQ
          </Text>
        </Stack>
        <Stack
          direction="column"
          width="33%"
          alignItems="center"
          justifyContent="center"
          fontSize="lg"
          spacing={2}
        >
          <Text>Datos de contacto</Text>
          <Divider orientation="horizontal" width="200px" borderWidth={2} />
          <Stack direction="row" align="center">
            <FaPhoneAlt />
            <Text>+569 8765 4321</Text>
          </Stack>
          <Stack direction="row" align="center">
            <MdEmail />
            <Text>contacto@sportify.cl</Text>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          width="33%"
          alignItems="center"
          justifyContent="center"
          fontSize="lg"
          spacing={2}
        >
          <Text>Redes sociales</Text>
          <Divider orientation="horizontal" width="200px" borderWidth={2} />
          <Stack direction="row" align="center">
            <FaInstagram /> <FaYoutube /> <FaFacebookF />
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};
const NavItems = ({ linkColor }) => {
  return (
    <Flex alignItems="center">
      <Link
        href="#"
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
        Servicios
      </Link>
      <Link
        href="#"
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
        href="#"
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
        href="#"
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
