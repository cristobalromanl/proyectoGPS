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
  Divider,
  HStack,
  Select,
} from "@chakra-ui/react";

import { useState } from "react";

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
    label: "Equipo Lince",
    logo: "/logosequipos/team1.png",
  },
  {
    id: 2,
    label: "Equipo Dragon",
    logo: "/logosequipos/team2.png",
  },
  {
    id: 3,
    label: "Equipo Bicho",
    logo: "/logosequipos/team3.png",
  },
  {
    id: 4,
    label: "Equipo L",
    logo: "/logosequipos/team4.png",
  },
  {
    id: 5,
    label: "Equipo Partisano",
    logo: "/logosequipos/team5.png",
  },
  {
    id: 6,
    label: "Equipo Yuste",
    logo: "/logosequipos/team6.png",
  },
  {
    id: 7,
    label: "Equipo MMJ",
    logo: "/logosequipos/team7.png",
  },
  {
    id: 8,
    label: "Equipo Kiku",
    logo: "/logosequipos/team8.png",
  },
];

const menuMatch = () => {
  const navBg = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const linkColor = useColorModeValue("myColor.Snow", "myColor.Snow");
  const singIColor = useColorModeValue("myColor.Aqua", "myColor.Aqua");
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };
  return (
    // NavBar
    <Box fontFamily={"Inter"}>
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
      <Flex
        height="90vh"
        justifyContent="center"
        alignItems={"center"}
        display="flex"
        backgroundImage={
          " linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.40)), url(./background.png)"
        }
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundColor="rgba(0, 0, 0, 0.25)"
      >
        <Box w={"80%"} h={"90%"} bg={"myColor.Snow"} p={10} align="center">
          <Stack spacing={4}>
            <HStack>
              <Heading width={"100%"}>Selecciona equipo:</Heading>
              <Select placeholder="Selecciona categoría" width={"100%"}>
                <option value="option1">Futbol</option>
                <option value="option2">Tenis</option>
                <option value="option3">Basquet</option>
                <option value="option3">Padel</option>
              </Select>
            </HStack>

            <VStack align="center" justify="center">
              <SimpleGrid
                width={"100%"}
                spacing={4}
                pt={4}
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
              >
                {overviewList.map((data) => (
                  <Card
                    align="center"
                    _hover={{
                      fontSize: "2xl",
                      bg: "myColor.Aqua",
                    }}
                    bg={selectedCardId === data.id ? "myColor.Aqua" : "#f5f5f5"}
                    cursor="pointer"
                    onClick={() => handleCardClick(data.id)}
                  >
                    <Stack p={4} align="center">
                      <Heading size="md">{data.label}</Heading>
                      <Image src={data.logo} height="160px" width="160px" />
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
              <Box>
                <Button
                  mt={8}
                  bg="#5d3c81"
                  color="white"
                  fontSize={"xl"}
                  _hover={{
                    fontSize: "2xl",
                  }}
                >
                  Desafiar
                </Button>
              </Box>
            </VStack>
          </Stack>
        </Box>
      </Flex>
      {/* Footer */}
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
