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
  Stack,
} from "@chakra-ui/react";

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
        height="80vh"
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
            width={"1000px"}
            spacing={4}
            pt={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card>
              <Stack>
                <Flex align="center" p={4}>
                  <Image src="/tenis.png" height="26px" />
                  <Heading size="md" ml={4}>
                    Tenis
                  </Heading>
                </Flex>
              </Stack>
              <CardBody>
                <Text textAlign="left">
                  ¡Descubre la emoción del tenis en nuestra plataforma! Consulta
                  la clasificación y enfréntate a ellos en emocionantes
                  partidos.{" "}
                </Text>
              </CardBody>
              <CardFooter>
                <Button>Buscar</Button>
              </CardFooter>
            </Card>
            <Card>
              <Stack>
                <Flex align="center" p={4}>
                  <Image src="/baloncesto.png" height="26px" />
                  <Heading size="md" ml={4}>
                    Basket
                  </Heading>
                </Flex>
              </Stack>
              <CardBody>
                <Text textAlign="left">
                  ¡Descubre la emoción del basket en nuestra plataforma!
                  Consulta la clasificación y enfréntate a ellos en emocionantes
                  partidos.{" "}
                </Text>
              </CardBody>
              <CardFooter>
                <Button>Buscar</Button>
              </CardFooter>
            </Card>
            <Card>
              <Stack>
                <Flex align="center" p={4}>
                  <Image src="/futbol.png" height="26px" />
                  <Heading size="md" ml={4}>
                    Futbol
                  </Heading>
                </Flex>
              </Stack>
              <CardBody>
                <Text textAlign="left">
                  ¡Descubre la emoción del fútbol en nuestra plataforma!
                  Consulta la clasificación y enfréntate a ellos en emocionantes
                  partidos.{" "}
                </Text>
              </CardBody>
              <CardFooter>
                <Button>Buscar</Button>
              </CardFooter>
            </Card>
            <Card>
              <Stack>
                <Flex align="center" p={4}>
                  <Image src="/raqueta-de-padel.png" height="26px" />
                  <Heading size="md" ml={4}>
                    Padel
                  </Heading>
                </Flex>
              </Stack>
              <CardBody>
                <Text textAlign="left">
                  ¡Descubre la emoción del padel en nuestra plataforma! Consulta
                  la clasificación y enfréntate a ellos en emocionantes
                  partidos.{" "}
                </Text>
              </CardBody>
              <CardFooter>
                <Button>Buscar</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Stack>
      </Box>
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
