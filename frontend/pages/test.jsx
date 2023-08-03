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
import { PhoneIcon, ChatIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navBg = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const linkColor = useColorModeValue("myColor.Snow", "myColor.Snow");
  const singIColor = useColorModeValue("myColor.Aqua", "myColor.Aqua");

  return (
    <Box>
      <Box px={20} py={2} bg={navBg}>
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
          <Box display={{ base: "none", md: "flex" }}></Box>
          <Box ml={4}>
            <Button
              bg={singIColor}
              colorScheme="myColor.Aqua"
              borderRadius={"12px"}
            >
              iniciar Sesión
            </Button>
          </Box>
        </Flex>
      </Box>
      <Flex
        height={"90vh"}
        width={"100wh"}
        display="flex"
        p={40}
        backgroundImage={"url(./background-v12.png)"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box width={"50%"} alignItems="center">
          <Heading fontSize="6xl" pt={20}>
            Sé parte de la nueva <br />
            experiencia competitiva
          </Heading>
          <Heading fontSize="4xl" mt={8} mb={8}>
            Juega y disfruta con amigos
          </Heading>
          <Text fontSize="2xl" mb={8}>
            ¡Regístrate ahora y reserva tu cancha favorita en solo unos clics!
          </Text>
          <Link href="###">
            <Button
              bg="myColor.Eminence"
              color="myColor.Snow"
              fontSize="2xl"
              fontWeight="sm"
              p={"26px"}
              borderRadius={"12px"}
              _hover={{ bg: "myColor.Aqua" }}
            >
              Registrate
            </Button>
          </Link>
        </Box>
        <Box
          boxSize="xl"
          width={"50%"}
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/main-1.png" borderRadius={"md"} />
        </Box>
      </Flex>
      <Flex
        height="240px"
        bg="myColor.Eminence"
        fontSize="2xl"
        color="#ffffff"
        fontFamily="Inter"
      >
        <Stack
          direction="column" // Stacks the elements vertically
          width="30%"
          alignItems="center"
          justifyContent="center"
          fontSize="lg"
          spacing={2} // Adds spacing between the stacked elements
        >
          {" "}
          <Text fontSize="2xl">Datos de contacto</Text>
          <Divider orientation="horizontal" width="200px" borderWidth={2} />
          <Text></Text>
        </Stack>
      </Flex>
    </Box>
  );
};
export default Navbar;
