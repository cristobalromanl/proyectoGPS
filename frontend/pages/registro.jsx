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
  Divider,
  Checkbox,
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
      p={4}
    >
      <Box
        borderRadius="md"
        maxWidth={1000}
        width="100%"
        height="auto"
        bg="#ffffff"
        p={4}
      >
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          bg="#ffffff"
        >
          <Box
            width="90%"
            sx={{ "@media screen and (max-width: 775px)": { width: "100%" } }}
            p={4}
          >
            <Heading textAlign="center" mb={4} color="#000000">
              Registro usuario
            </Heading>

            <Box
              bg="#f6f2f2"
              borderRadius={"md"}
              borderColor="#000000"
              borderWidth="1px"
            >
              <FormControl pt={4} color="#000000" pb={4} p={4}>
                <FormLabel fontWeight={"bold"} fontSize={"lg"}>
                  Información Usuario
                </FormLabel>
                <hr />
                <Stack
                  direction="row"
                  alignItems="center"
                  mt={2}
                  spacing="20px"
                >
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Nombre(s)</FormLabel>

                    <Input
                      type="text"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>{" "}
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Apellido(s)</FormLabel>

                    <Input
                      type="text"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  mt={2}
                  spacing="20px"
                >
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Contraseña</FormLabel>

                    <Input
                      type="password"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>{" "}
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Repetir contraseña</FormLabel>

                    <Input
                      type="password"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>
                </Stack>
              </FormControl>
            </Box>
            <Box
              bg="#f6f2f2"
              mt={4}
              borderRadius={"md"}
              borderColor="#000000"
              borderWidth="1px"
            >
              <FormControl pt={4} color="#000000" pb={4} p={4}>
                <FormLabel fontWeight={"bold"} fontSize={"lg"}>
                  Datos de contacto
                </FormLabel>
                <hr />
                <Stack
                  direction="row"
                  alignItems="center"
                  mt={2}
                  spacing="20px"
                >
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Nombre(s)</FormLabel>

                    <Input
                      type="text"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>{" "}
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Apellido(s)</FormLabel>

                    <Input
                      type="text"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  mt={2}
                  spacing="20px"
                >
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Contraseña</FormLabel>

                    <Input
                      type="password"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>{" "}
                  <Stack
                    direction="column"
                    alignItems="left"
                    spacing="-4px"
                    width="100%"
                  >
                    <FormLabel>Repetir contraseña</FormLabel>

                    <Input
                      type="password"
                      placeholder="usuario@ejemplo.com"
                      mt={4}
                      borderColor="gray.400"
                      borderWidth="1px"
                      borderRadius="lg"
                      _hover={{
                        borderColor: "gray.600",
                      }}
                    />
                  </Stack>
                </Stack>
              </FormControl>
            </Box>

            <Stack alignItems="center" mt={5} mb={4}>
              <Stack display="flex" alignItems="left" spacing={2}>
                <Checkbox>
                  He leído y acepto los términos de condición y servicios
                </Checkbox>
                <Checkbox>
                  Mantenme al día con novedades y ofertas en mi área
                </Checkbox>
              </Stack>
            </Stack>
            <Stack alignItems="center" display="flex">
              <Button
                mb={2}
                mt={1}
                bg="#5d3c81"
                color="white"
                alignItems="center"
                width="30%"
                _hover={{
                  bg: "#05F3FF",
                }}
              >
                Registrar
              </Button>
              <Box textAlign="center">
                <Text
                  color="#000000"
                  fontWeight="semibold"
                  _hover={{
                    fontSize: "md",
                  }}
                >
                  Ya tienes una cuenta?{" "}
                  <Link color="#5d3c81" fontWeight={"semibold"}>
                    Ingresa ahora!
                  </Link>
                </Text>
              </Box>
            </Stack>
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
