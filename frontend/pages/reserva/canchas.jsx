import React, { useEffect, useState } from "react";
import axios from "axios";
import { SlOptionsVertical } from "react-icons/sl";
import { BsHouseDoor, BsCheck, BsX } from "react-icons/bs";
import { GiSoccerField, GiTennisCourt } from "react-icons/gi";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Image, Img } from "@chakra-ui/react";
import DataTable, { createTheme } from "react-data-table-component";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spacer,
  BackgroundImage,
  VStack,
  Container,
  HStack,
  Text,
} from "@chakra-ui/react";

const reservas = () => {
  /*const [dataCanchas, setDataCanchas] = useState([]);

  useEffect(() => {
    //  GET a la ruta del backend que devuelve la información de las canchas
    axios.get('/aca poner la ruta del backend donde conseguir los datos')
      .then((response) => {
        // Actualizar el estado con los datos recibidos del backend
        setDataCanchas(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de las canchas:', error);
      });
  }, []);*/

  createTheme(
    "custom",
    {
      text: { primary: "#EAEAEA", secondary: "#2aa198" },
      background: { default: "#002b36" },
      context: { background: "yellow", text: "#FFFFFF" },
      divider: { default: "#073642" },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );
  const horasPredefinidas = ["12:00", "13:00", "14:00", "15:00", "16:00"];
  const dataCanchas = [
    {
      cancha: { nombre: "Cancha 1" },
      "12:00": false,
      "13:00": false,
      "14:00": false,
      "15:00": true,
      "16:00": false,
    },
    {
      cancha: { nombre: "Cancha 2" },
      "12:00": true,
      "13:00": false,
      "14:00": true,
      "15:00": false,
      "16:00": true,
    },
    // Agrega más filas de ejemplo según la cantidad de canchas que tengas
  ];

  const getColumnForHora = (hora) => ({
    name: hora,
    center: true,
    cell: (row) => {
      const isCanchaOcupada = row[hora]; // Aquí obtienes el estado de ocupación de la cancha desde los datos del backend
      const ButtonComponent = isCanchaOcupada ? (
        <Button
          onClick={() => handleOcupado()}
          size="xs"
          width="100px"
          bg="red.500"
          color="red"
          className="btn btn-outline btn-xs"
        >
          <Icon as={BsX} color="white" />
        </Button>
      ) : (
        <Button
          onClick={() => handleLibre()}
          size="xs"
          width="100px"
          bg="green.500"
          color="green"
          className="btn btn-outline btn-xs"
        >
          <Icon as={BsCheck} color="white" />
        </Button>
      );
      return ButtonComponent;
    },
  });

  const columnas = [
    { name: "Cancha", selector: "cancha.nombre", sortable: true },
    // Generar las columnas para cada hora predefinida
    ...horasPredefinidas.map((hora) => getColumnForHora(hora)),
  ];
  const tablaprueba = [
    { hora: "12:00" },
    { hora: "13:00" },
    { hora: "14:00" },
    { hora: "15:00", dataisConfirmed: "true(ocupado)" },
    { hora: "16:00" },
  ];
  /*const columnas=[
  {name: 'Hora', selector: 'hora'},
  {name: 'Cancha 1',center:true, cell: row => {
    //En el boton debo crear una funcion para la que el espacio de la cancha este ocupado (y dejarlo en la bdd, creo jeje)
    return (
        <>
             <Button  onClick="Libre"size={'xs'} width={'100px'} bg={'green.500'} color={'green'} className="btn btn-outline btn-xs" >
                <Icon as={BsCheck}   color={'white'} />
            </Button> 

        </>);}},
  {name: 'Cancha 2',center:true, cell: row => {
    //En el boton debo crear una funcion para la que el espacio de la cancha este ocupado (y dejarlo en la bdd, creo jeje)
    if (row.dataisConfirmed=="true(ocupado)"){
      return (
          <>
          
               <Button  onClick="Ocupado"size={'xs'} width={'100px'} bg={'red.500'} color={'red'} className="btn btn-outline btn-xs" >
                  <Icon as={BsX} color={'white'}  />
              </Button> 
  
          </>);
        }else{
          return (
            <>
                 <Button  onClick="Libre"size={'xs'} width={'100px'} bg={'green.500'} color={'green'} className="btn btn-outline btn-xs" >
                    <Icon as={BsCheck} color={'white'}  />
                </Button> 
    
            </>);
  
        }}},
  {name: 'Cancha 3',center:true,cell: row => {
    //En este caso el if deberia ir a la par con la const (tablaprueba), pero aca deberia ir la data que entrege la BDD, osea una constante que entrege los datos de las canchas, no se como se conecta la bbd con eso en este caso.
    //
    if (row.dataisConfirmed=="true(ocupado)"){
    return (
        <>
        
             <Button  onClick="Ocupado"size={'xs'} width={'100px'} bg={'red.500'} color={'red'} className="btn btn-outline btn-xs" >
                <Icon as={BsX} color={'white'}  />
            </Button> 

        </>);
      }else{
        return (
          <>
               <Button  onClick="Libre"size={'xs'} width={'100px'} bg={'green.500'} color={'green'} className="btn btn-outline btn-xs" >
                  <Icon as={BsCheck} color={'white'}  />
              </Button> 
  
          </>);

      }
      }
      }
];*/

  return (
    <Container margin={"0"} p={"0"} maxW={"full"} maxH={"full"}>
      <HStack as="nav" p="10px" bg="#5D3C81" px={36}>
        <Heading color={"white"}>
          {" "}
          <Image src="/img/Sportify.png" w={"120px"} h={"100px"} />
        </Heading>

        <Spacer />
        <Button
          colorScheme="teal"
          variant="unstyled"
          color={"white"}
          mx="100px"
          fontSize={"28px"}
          display={"flex"}
        >
          <Icon as={BsHouseDoor} color={"white"} w={"40px"} h={"37px"} />
          <Text w={"79px"} h={"37"}>
            Inicio
          </Text>
        </Button>
        <Button colorScheme="teal" variant="unstyled" color={"white"} mx="10px">
          <Box>
            <Icon as={SlOptionsVertical} color={"white"} />
          </Box>
        </Button>
      </HStack>
      <VStack bg={"#C08EE1"} width={"full"} height={" container.lg"}>
        <Heading
          color={"white"}
          my={"30px"}
          p={"15px"}
          fontFamily={"Poppins , sans-serif"}
        >
          Elige tu cancha <Icon as={GiTennisCourt} />{" "}
        </Heading>
        <VStack>
          <DataTable
            columns={columnas}
            data={dataCanchas}
            theme="custom"
            fixedHeader
            fixedHeaderScrollHeight="600px"
          />
        </VStack>
      </VStack>
    </Container>
  );
};

export default reservas;
