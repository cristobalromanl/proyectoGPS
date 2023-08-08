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
    label: "Regístrate",
    subLabel: "Crea tu cuenta en nuestra plataforma e inicia la sesión.",
  },
  {
    id: 2,
    label: "Reserva tu cancha",
    subLabel: "Dirígete a la sección de reservas en el menú principal.",
  },
  {
    id: 3,
    label: "Elige día y hora",
    subLabel:
      "Revisa la disponibilidad de canchas y elige el horario que buscas.",
  },
  {
    id: 4,
    label: "Visita nuestro recinto",
    subLabel:
      "Bienvenido a Sportify!! disfruta de sesiones deportivas con tu equipo y participa en el torneo de inauguración.",
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
            ¿Cómo reservar una cancha?
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
