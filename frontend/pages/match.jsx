import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Button,
  Link,
  useColorModeValue,
  Wrap,
  WrapItem,
  Center,
  VStack,
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  HStack,
  Stack,
  Divider,
} from "@chakra-ui/react";
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
    label: "Tenis",
    image: "/tenis.png",
    description:
      "¡Descubre la emoción del fútbol en nuestra plataforma! Consulta la clasificación y enfréntate a ellos en emocionantes partidos.",
  },
  {
    id: 2,
    label: "Basket",
    image: "/baloncesto.png",
    description:
      "¡Descubre la emoción del fútbol en nuestra plataforma! Consulta la clasificación y enfréntate a ellos en emocionantes partidos.",
  },
  {
    id: 3,
    label: "Futbol",
    image: "/futbol.png",
    description:
      "¡Descubre la emoción del fútbol en nuestra plataforma! Consulta la clasificación y enfréntate a ellos en emocionantes partidos.",
  },
  {
    id: 4,
    label: "Padel",
    image: "/padel.png",
    description:
      "¡Descubre la emoción del fútbol en nuestra plataforma! Consulta la clasificación y enfréntate a ellos en emocionantes partidos.",
  },
];
const menuMatch = () => {
  const navBg = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const linkColor = useColorModeValue("myColor.Snow", "myColor.Snow");
  const singIColor = useColorModeValue("myColor.Aqua", "myColor.Aqua");
  return (
    // NavBar
    <Box>
      <Box px={36} py={2} bg={navBg}>
        <Flex alignItems="center">
          <Image
            src="/Sportify.png"
            alt="logo"
            width="100px"
            height="100px"
            borderRadius="full"
            objectFit="cover"
          ></Image>
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
      <Box
        height="90vh"
        bg="myColor.Aqua"
        fontFamily="Inter"
        alignItems="center"
        justifyContent="center"
        display="flex"
        backgroundImage={
          " linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.40)), url(./background.png)"
        }
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundColor="rgba(0, 0, 0, 0.25)"
      >
        <Stack
          spacing={4}
          p={4}
          align="center"
          direction="column"
          color="#ffffff"
        >
          <Heading>Lista de equipos</Heading>
          <Text fontWeight="xl">
            Conoce los distintos equipos y busca nuevos rivales para desafiar.
          </Text>
          <SimpleGrid
            width={"1200px"}
            spacing={4}
            pt={4}
            templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
          >
            {overviewList.map((data) => (
              <Card>
                <Stack>
                  <Flex align="center" p={4}>
                    <Image src={data.image} height="26px" />
                    <Heading size="md" ml={4}>
                      {data.label}
                    </Heading>
                  </Flex>
                </Stack>
                <CardBody>
                  <Text textAlign="left">{data.description} </Text>
                </CardBody>
                <CardFooter>
                  <Link href="/listamatch">
                    <Button>Buscar</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
      <Flex
        height="240px"
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
          <Divider orientation="horizontal" width="200px" borderWidth={1} />
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
          <Divider orientation="horizontal" width="200px" borderWidth={1} />
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
          <Divider orientation="horizontal" width="200px" borderWidth={1} />
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
        fontWeight="medium"
        fontSize="2xl"
        color={linkColor}
        _hover={{
          textDecoration: "none",
          color: "myColor.Aqua",
          cursor: "pointer",
          fontSize: "xl",
        }}
      >
        Usuario{" "}
      </Link>
    </Flex>
  );
};

export default menuMatch;
