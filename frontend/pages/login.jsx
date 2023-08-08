import {
  Alert,
  Box,
  Input,
  Button,
  Heading,
  Flex,
  Image,
  Link,
  FormControl,
  FormLabel,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, login } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: false,
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password);

      router.push("/home");
    } catch (error) {
      setUser({
        email: "",
        password: "",
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

            {user.error && (
              <Alert
                mt={4}
                status="error"
                bg={"myColor.Eminence"}
                color={"#ffffff"}
                borderRadius="lg"
              >
                Credenciales incorrectas
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <FormControl mt={4} color="#000000">
                <FormLabel>Correo Electrónico</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="usuario@ejemplo.com"
                  mb={4}
                  borderColor="gray.400"
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{
                    borderColor: "gray.600",
                  }}
                  onChange={handleChange}
                />
                <FormLabel>Contraseña</FormLabel>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  mb={4}
                  borderColor="gray.400"
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{
                    borderColor: "gray.600",
                  }}
                  onChange={handleChange}
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
                type="submit"
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
            </form>

            <Box textAlign="center" mt={5}>
              <Link color="#5d3c81" href="/recuperar">
                ¿Olvidaste tu contraseña?
              </Link>
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
