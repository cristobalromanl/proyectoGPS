import {
  ChakraProvider,
  Box,
  Input,
  Button,
  Heading,
  useColorModeValue,
  Flex,
  Image,
  Link,
  FormControl,
  FormLabel,
  Form,
  Stack,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Switch } from "@chakra-ui/react";

function LoginForm() {
  const bgEminence = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const bgSnow = useColorModeValue("myColor.Snow", "myColor.Snow");
  return (
    <Box
      bg="#5d3c81"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <Box
        borderRadius="md"
        maxWidth={900}
        width="100%"
        height="auto"
        bg="#f6f2f2"
      >
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Box
            width="50%"
            sx={{ "@media screen and (max-width: 775px)": { width: "100%" } }}
            p={4}
          >
            <Heading textAlign="center" mb={4} color="#000000">
              Recuperar Contraseña{" "}
            </Heading>
            <hr />
            <Stack alignItems="center">
              <FormControl
                mt={4}
                color="#000000"
                width={"80%"}
                alignContent="center"
              >
                <FormLabel>Correo Electrónico</FormLabel>
                <Input
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  mb={2}
                  borderColor="gray.400"
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{
                    borderColor: "gray.600",
                  }}
                />
                <FormLabel fontWeight={"normal"} fontSize={"sm"}>
                  * Ingrese correo electronico asociado a la cuenta que desea
                  recuperar
                </FormLabel>
              </FormControl>
              <Button
                mb={5}
                bg="#5d3c81"
                color="white"
                width="50%"
                _hover={{
                  fontSize: "lg",
                  bg: "#05F3FF",
                }}
              >
                Recuperar
              </Button>
            </Stack>
            <Box textAlign="center" mt={4}>
              <Link color="#5d3c81" fontWeight={"bold"}>
                Ingresa ahora
              </Link>
              <Text
                color="#000000"
                fontWeight="semibold"
                _hover={{
                  fontSize: "md",
                }}
              >
                ¿Aun no tienes cuenta? <Link color="#5d3c81">Registrate!</Link>
              </Text>
            </Box>
          </Box>
          <Box
            width="50%"
            sx={{ "@media screen and (max-width: 775px)": { display: "none" } }}
          >
            <Image width="100%" src="/img-test.png"></Image>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  );
}

export default App;
