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
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail, MdSportsBaseball } from "react-icons/md";

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
        <Container maxW="7xl" bg="#f6f2f2" p={20} borderRadius={"md"}>
          <HStack width={"100%"} textAlign={"justify"} spacing={8}>
            <Box width={"50%"}>
              <Heading mb={4} fontSize={"4xl"}>
                {" "}
                ¡Bienvenido a Sportify!{" "}
              </Heading>
              <Heading mb={4} fontSize={"lg"}>
                {" "}
                Tu plataforma de reserva de canchas deportivas favorita.{" "}
              </Heading>
              <Text>
                En Sportify, entendemos que el deporte es una parte fundamental
                de tu vida. Ya sea que busques una cancha de fútbol para un
                emocionante partido con amigos, desees perfeccionar tus tiros en
                la canasta en una cancha de baloncesto de primer nivel, busques
                la emoción del pádel o la elegancia de una partida de tenis,
                estamos aquí para hacer que tu experiencia deportiva sea
                inolvidable.
              </Text>
              <List spacing={3} mt={4}>
                <ListItem>
                  <ListIcon as={MdSportsBaseball} color="myColor.Eminence" />
                  <b>Variedad de Canchas:</b> En Sportify, te ofrecemos una
                  amplia gama de opciones. Desde campos de fútbol de césped
                  sintético hasta canchas de tenis de arcilla, encontrarás la
                  cancha perfecta para tus necesidades y preferencias.{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={MdSportsBaseball} color="myColor.Eminence" />
                  <b>Reservas Sencillas:</b> Nuestra interfaz intuitiva hace que
                  reservar una cancha sea pan comido. Elige el deporte, la
                  ubicación, la fecha y la hora, ¡y listo! Olvídate de las
                  complicaciones y concéntrate en disfrutar del juego.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdSportsBaseball} color="myColor.Eminence" />
                  <b>Calidad Garantizada:</b> Trabajamos con instalaciones
                  deportivas de alta calidad para asegurarnos de que cada
                  partido sea una experiencia excepcional. Canchas bien
                  mantenidas y equipamiento de primera te esperan en cada
                  reserva.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdSportsBaseball} color="myColor.Eminence" />
                  <b>Comunidad Deportiva:</b> Sportify no es solo una plataforma
                  de reservas, ¡es una comunidad! Conecta con otros entusiastas
                  del deporte, comparte consejos y organiza partidos amistosos.
                </ListItem>
              </List>
            </Box>
            <Box
              width="50%"
              sx={{
                "@media screen and (max-width: 775px)": { display: "none" },
              }}
            >
              <Image width="100%" src="/login.png"></Image>
            </Box>
          </HStack>
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
