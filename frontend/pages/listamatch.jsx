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
  Select,
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
    label: "Equipo Lince",
  },
  {
    id: 2,
    label: "Equipo Dragon",
  },
  {
    id: 3,
    label: "Equipo Bicho",
  },
  {
    id: 4,
    label: "Equipo L",
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
        <Box w={"80%"} h={"90%"} bg={"myColor.Snow"} p={10}>
          <Stack spacing={4}>
            <Heading>Selecciona equipo:</Heading>
            <Select placeholder="Select option">
              {overviewList.map((data) => (
                <option value={data.label}>{data.label}</option>
              ))}
            </Select>
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
