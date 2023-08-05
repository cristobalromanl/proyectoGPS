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
            sx={{ "@media screen and (max-width: 775px)": { display: "none" } }}
          >
            <Image width="100%" src="/login.png"></Image>
          </Box>
          <Box
            width="50%"
            sx={{ "@media screen and (max-width: 775px)": { width: "100%" } }}
            p={4}
          >
            <Heading textAlign="center" mb={4} color="#000000">
              Iniciar sesión
            </Heading>
            <hr />

            <FormControl mt={4} color="#000000">
              <FormLabel>Correo Electrónico</FormLabel>
              <Input
                type="email"
                placeholder="usuario@ejemplo.com"
                mb={4}
                borderColor="gray.400"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: "gray.600",
                }}
              />
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                placeholder="Contraseña"
                mb={4}
                borderColor="gray.400"
                borderWidth="1px"
                borderRadius="lg"
                _hover={{
                  borderColor: "gray.600",
                }}
              />
              <Stack display="flex" pl={1} pb={2}>
                <Flex direction="row" align="center">
                  <Switch id="recuerdame-id" />
                  <FormLabel htmlFor="recuerdame-id" mt="1" ml="2">
                    Recordarme
                  </FormLabel>
                </Flex>
              </Stack>
            </FormControl>

            <Button
              mb={5}
              bg="#5d3c81"
              color="white"
              width="100%"
              _hover={{
                fontSize: "lg",
                bg: "#05F3FF",
              }}
            >
              Iniciar sesión
            </Button>
            <Box textAlign="center" mt={5}>
              <Link color="#5d3c81">¿Olvidaste tu contraseña?</Link>
              <Text
                color="#000000"
                fontWeight="semibold"
                _hover={{
                  fontSize: "md",
                }}
              >
                ¿Aun no tienes cuenta?{" "}
                <Link color="#5d3c81" href="/registro">
                  Registrate!
                </Link>
              </Text>
            </Box>
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
