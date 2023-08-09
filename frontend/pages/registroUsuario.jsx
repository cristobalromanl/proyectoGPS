import React, {useEffect, useState}  from 'react';
import {Box, 
    Text, 
    Heading, 
    FormControl, 
    FormLabel, 
    Wrap,
    WrapItem,
    Input,
    Select,
    InputGroup,
    InputRightElement,
    IconButton,
    Button,
    Icon, 
    Checkbox, 
    Stack} from '@chakra-ui/react';
    import { ViewIcon, ViewOffIcon, AddIcon } from "@chakra-ui/icons";

function registroUsuario() {


  const items = [
    "He leído y acepto los terminos de condición y servicios",
    "Mantenerme al dia con las novedades y ofertas en mi área"
  ];

  const [regiones, setRegiones] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [regionSeleccionada, setRegionSeleccionada] = useState("");
  const [comunaSeleccionada, setComunaSeleccionada] = useState("");

  useEffect(() => {
    fetch("https://api.shipit.cl/v/regions")
      .then((response) => response.json())
      .then((data) => setRegiones(data))
      .catch((error) => console.log(error));
  }, []);

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setRegionSeleccionada(selectedRegion);
    setComunaSeleccionada("");

    fetch(`https://app.sendu.cl/api/comunas.json`)
      .then((response) => response.json())
      .then((data) => setComunas(data))
      .catch((error) => console.log(error));
  };

  const handleComunaChange = (event) => {
    const selectedComuna = event.target.value;
    setComunaSeleccionada(selectedComuna);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };



    return (
        <Box bg="myColor.Eminence" 
            height="auto" 
            display="flex" 
            justifyContent="center" 
            alignItems="center">
            <Box bg="#FFF" width="90%" height="auto"
                borderRadius="md" my={4}>
                    <Heading textAlign="center" my={3} fontFamily="FIFA Welcome">
                        Registro usuarios
                    </Heading>
                    <hr />
                    <Box height="">
                        <Box mt={3} width="90%" mx="auto" alignItems="center" 
                        bg="myColor.Snow" borderRadius={4} boxShadow="md">
                            <Text fontWeight="bold" p={2}>Informacion Usuario</Text>
                            <hr />
                            <Wrap align="center" justify="space-around" p={3} >
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl  mx={3}>
                                        <FormLabel>Nombre(s)</FormLabel>
                                        <Input width="100%" boxShadow="md" bg="#FFF" ></Input>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl  mx={3}>
                                        <FormLabel>Apellidos</FormLabel>
                                        <Input width="100%" boxShadow="md" bg="#FFF" ></Input>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl  mx={3}>
                                        <FormLabel>Contraseña</FormLabel>
                                        <InputGroup width="100%">
                                            <Input
                                              boxShadow="md"
                                              type={showPassword ? "text" : "password"}
                                              bg="#FFF"
                                            />
                                            <InputRightElement>
                                              <IconButton
                                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                                onClick={handleTogglePassword}
                                                variant="ghost"
                                              />
                                            </InputRightElement>
                                          </InputGroup>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl   mx={3}>
                                        <FormLabel>Repetir contraseña</FormLabel>
                                        <InputGroup width="100%">
                                            <Input
                                              boxShadow="md"
                                              type={showPassword ? "text" : "password"}
                                              bg="#FFF"
                                              
                                            />
                                            <InputRightElement>
                                              <IconButton
                                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                                onClick={handleTogglePassword}
                                                variant="ghost"
                                              />
                                            </InputRightElement>
                                          </InputGroup>
                                    </FormControl>
                                </WrapItem>
                            </Wrap>
                        </Box>
                        <Box mt={3} width="90%" mx="auto" alignItems="center" 
                        bg="myColor.Snow" borderRadius={4} boxShadow="md">
                            <Text fontWeight="bold" p={2}>Datos de contacto</Text>
                            <hr />
                            <Wrap align="stretch" justify="space-around" p={3} >
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl   mx={3}>
                                        <FormLabel>Correo</FormLabel>
                                        <Input width="100%" boxShadow="md" bg="#FFF" ></Input>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl   mx={3}>
                                        <FormLabel>Telefono</FormLabel>
                                        <Input width="100%" boxShadow="md" bg="#FFF" ></Input>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl   mx={3}>
                                        <FormLabel>Region</FormLabel>
                                        <Select width="100%" boxShadow="md" bg="#FFF" value={regionSeleccionada} onChange={handleRegionChange} placeholder="Selecciona una región">
                                            {regiones.map((region) => (
                                              <option key={region.id} value={region.id}>
                                                {region.name}
                                              </option>
                                            ))}
                                          </Select>
                                    </FormControl>
                                </WrapItem>
                                <WrapItem width="49%" sx={{"@media screen and (max-width: 1056px)": {width: "100%",},}} justifyContent="center">
                                    <FormControl  mx={3}>
                                        <FormLabel>Comuna</FormLabel>
                                        <Select width="100%" boxShadow="md" bg="#FFF" value={comunaSeleccionada} onChange={handleComunaChange} placeholder="Selecciona una comuna">
                                          {comunas.map((comuna) => (
                                            <option key={comuna.id} value={comuna.id}>
                                              {comuna.nombre}
                                            </option>
                                          ))}
                                        </Select>
                                    </FormControl>
                                </WrapItem>
                            </Wrap>
                        </Box>
                        <Box mt={3} width="90%" mx="auto" display="flex" alignItems="center" 
                        bg="#FFF">
                          <Box width="49%">
                            <Button borderRadius={4} mr={5} boxShadow="md" bg="myColor.Snow"
                            display="flex"
                            alignItems="center"
                            fontWeight="bold"
                            >
                              <Icon as={AddIcon} boxSize={4} mr={2} color="green.500" />
                              Agregar Metodo de Pago
                            </Button>
                          </Box>  
                          <Stack width="60%" spacing={2}>
                            {items.map((item, index) => (
                              <Checkbox key={index} defaultChecked={false}>
                                {item}
                              </Checkbox>
                            ))}
                          </Stack>
                        </Box>
                    </Box>
                    <Box width="90%" mx="auto" my={5} alignItems="center" 
                        bg="#FFF" display="flex" justifyContent="center">
                      <Button bg="myColor.Eminence" color="#FFF">Registrar</Button> 
                      
                    </Box>
                       
                    
                
            </Box>
            
        </Box>
    )

};

export default registroUsuario;