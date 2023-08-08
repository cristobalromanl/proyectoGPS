import {
  Alert,
  Box,
  Input,
  Button,
  Heading,
  Flex,
  Link,
  FormControl,
  FormLabel,
  Stack,
  Select,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const REGIONES = {
  15: "Arica y Parinacota - XV",
  1: "Arica y Parinacota - XV",
  2: "Tarapacá - I",
  3: "Antofagasta - II",
  4: "Atacama - III",
  5: "Coquimbo - IV",
  6: "Valparaiso - V",
  7: "Metropolitana de Santiago - RM",
  8: "Libertador General Bernardo OHiggins - VI",
  9: "Maule - VII",
  10: "Biobío - VIII",
  11: "La Araucanía - IX",
  12: "Los Ríos - XIV",
  13: "Los Lagos - X",
  14: "Aisén del General Carlos Ibáñez del Campo - XI",
};

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated, register, login } = useAuth();
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    regionKey: "",
    city: "",
    phone: "",
    error: false,
  });

  const handleChange = (e) => {
    if (e.target.name === "region") {
      return setUser({
        ...user,
        region: REGIONES[e.target.value],
      });
    }

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({
        ...user,
        fullName: `${user.firstName} ${user.lastName}`,
        region: REGIONES[user.regionKey],
      });

      await login(user.email, user.password);

      router.push("/home");
    } catch (error) {
      setUser({
        email: "",
        fullName: "",
        firstName: "",
        lastName: "",
        password: "",
        region: "",
        city: "",
        phone: "",
        error: true,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated]);

  return (
    <Box
      fontFamily="Inter"
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

            {user.error && (
              <Alert my={4} status="error">
                Credenciales incorrectas
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
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
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Nombre"
                        mt={4}
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{
                          borderColor: "gray.600",
                        }}
                        value={user.firstName}
                        onChange={handleChange}
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
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Apellidos"
                        mt={4}
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{
                          borderColor: "gray.600",
                        }}
                        value={user.lastName}
                        onChange={handleChange}
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
                        id="password"
                        name="password"
                        type="password"
                        placeholder="*********"
                        mt={4}
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{
                          borderColor: "gray.600",
                        }}
                        value={user.password}
                        onChange={handleChange}
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
                        placeholder="*********"
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
                      <FormLabel>Correo</FormLabel>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="usuario@ejemplo.com"
                        mt={4}
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{
                          borderColor: "gray.600",
                        }}
                        value={user.email}
                        onChange={handleChange}
                      />
                    </Stack>{" "}
                    <Stack
                      direction="column"
                      alignItems="left"
                      spacing="-4px"
                      width="100%"
                    >
                      <FormLabel>Teléfono</FormLabel>

                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+56987654321"
                        mt={4}
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{
                          borderColor: "gray.600",
                        }}
                        value={user.phone}
                        onChange={handleChange}
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
                      <FormLabel>Región</FormLabel>

                      <Select
                        id="regionKey"
                        name="regionKey"
                        type="text"
                        placeholder="Selecciona Región"
                        mt={4}
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{
                          borderColor: "gray.600",
                        }}
                        value={user.regionKey}
                        onChange={handleChange}
                      >
                        {Object.keys(REGIONES).map((key) => (
                          <option key={key} value={key}>
                            {REGIONES[key]}
                          </option>
                        ))}
                      </Select>
                    </Stack>{" "}
                    <Stack
                      direction="column"
                      alignItems="left"
                      spacing="-4px"
                      width="100%"
                    >
                      <FormLabel>Comuna</FormLabel>

                      <Input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Concepción"
                        mt={4}
                        borderColor="gray.400"
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{
                          borderColor: "gray.600",
                        }}
                        value={user.city}
                        onChange={handleChange}
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
                  type="submit"
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
                    <Link color="#5d3c81" fontWeight={"semibold"} href="/login">
                      Ingresa ahora!
                    </Link>
                  </Text>
                </Box>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
