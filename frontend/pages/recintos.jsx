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
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Card,
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
    nombre: "Campo baloncesto",
    imagen: "/canchas/cancha1.png",
  },
  {
    id: 2,
    nombre: "Arena deportiva",
    imagen: "/canchas/cancha2.png",
  },
  {
    id: 3,
    nombre: "Campo futbolito",
    imagen: "/canchas/cancha3.png",
  },
  {
    id: 4,
    nombre: "Padel park",
    imagen: "/canchas/cancha4.png",
  },
  {
    id: 5,
    nombre: "Campo tenis",
    imagen: "/canchas/cancha5.png",
  },
  {
    id: 6,
    nombre: "Campo iluminado",
    imagen: "/canchas/cancha6.png",
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
      {/* Banner */}
      <Flex
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
            Recintos Deportivos
          </chakra.h2>

          <Box p={4}>
            <SimpleGrid columns={3} spacing={8} rows={2}>
              {overviewList.map((data) => (
                <Card
                  key={data.id}
                  align="center"
                  _hover={{
                    fontSize: "2xl",
                    bg: "myColor.Eminence",
                    color: "#ffffff",
                  }}
                >
                  <VStack p={4} align="center">
                    <Heading size="md">{data.nombre}</Heading>
                    <Image src={data.imagen} height="160px" width="320px" />
                  </VStack>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
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
        href="/conocenos"
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
        href="/recintos"
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
        Recintos
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
