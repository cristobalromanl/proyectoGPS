import { ChakraProvider, Box, Input, Button, Heading, useColorModeValue, Flex, Image, Link,
  FormControl, FormLabel,FormErrorMessage, Text, extendTheme } from "@chakra-ui/react";
import React from 'react';          

function LoginForm() {




  return (
    
    <Box bg="#5d3c81" display="flex" justifyContent="center" alignItems="center" width="100vw" height="100vh">
      <Box  borderRadius="md" maxWidth={900} width="90%" height="auto" bg="#f6f2f2">
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Box width="50%" sx={{"@media screen and (max-width: 775px)": {display: "none"}}} >
            <Image width="100%" src="/login.png"></Image>
          </Box>
          <Box width="50%" sx={{"@media screen and (max-width: 775px)": {width: "100%",},}} p={4} >
            <Heading textAlign="center" mb={4} fontFamily="FIFA Welcome">
              Iniciar sesión
            </Heading>
            <hr/>
            <form action="">
              <FormControl mt={5}>
                <FormLabel>Correo Electrónico</FormLabel>
                <Input type="email" placeholder="usuario@ejemplo.com" mb={4} />
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" placeholder="Contraseña" mb={4} />
              </FormControl>
              <Button mb={5} bg="#5d3c81" type="submit" color="white" width="100%" >
                Iniciar sesión
              </Button>
            </form>
            
            <Box textAlign="center" mt={5} >
              <Link color="#5d3c81" >¿Olvidaste tu contraseña?</Link>
              <Text>
                ¿Aun no tienes cuenta? <Link href="/registroUsuario"  color="#5d3c81" >Registrate!</Link>
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