import {
  Box,
  Flex,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";

export default function Login_1() {
  return (
    <Flex overflowX="hidden" w="100%" justify="center">
      <Flex w="100%" maxW="1044px" mx="auto" justifyContent="center" minW="800px">
        <Flex alignItems="center" justifyContent="start">
          <Flex direction="column" w="100%" background="transparent" p="48px">
            <Flex justify="center" mb="40px">
              <Image src="/logo.png" boxSize="150px" alt="LOGO" />
            </Flex>

            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Correo Electrónico
              </FormLabel>
              <Input
                id="email"
                placeholder="Tu correo electrónico"
                borderRadius="15px"
                fontSize="sm"
                type="email"
                size="lg"
                required
                autoFocus
              />
            </FormControl>

            <FormControl>
              <FormLabel ms="4px" mt="24px" fontSize="sm" fontWeight="normal">
                Contraseña
              </FormLabel>
              <Input
                id="password"
                placeholder="Tu contraseña"
                borderRadius="15px"
                mb="36px"
                fontSize="sm"
                type="password"
                size="lg"
                required
                autoComplete="current-password"
              />
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <Switch id="remember-me" colorScheme="teal" me="10px" />
              <FormLabel
                htmlFor="remember-me"
                mb="0"
                ms="1"
                fontWeight="normal"
              >
                Recordarme
              </FormLabel>
            </FormControl>

            <Button
              type="submit"
              bg="#5D3C81"
              w="100%"
              h="45"
              mb="20px"
              color="white"
              mt="20px"
              _hover={{ bg: "purple.600" }}
              _active={{ bg: "purple.400" }}
            >
              INICIAR SESIÓN
            </Button>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text fontWeight="medium">
                ¿No tienes una cuenta?
                <Link href="/register" color="#5D3C81" ms="5px">
                  Registrarse
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
