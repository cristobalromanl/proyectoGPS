import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import {SlOptionsVertical} from 'react-icons/sl'
import {BsHouseDoor, BsCheck , BsX} from 'react-icons/bs'
import { GiSoccerField, GiTennisCourt } from "react-icons/gi";
import { Card,Modal, ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Img} from "@chakra-ui/react"
import DataTable, {createTheme} from 'react-data-table-component'
import { Box, Button,  Flex, Heading,Icon, Spacer, BackgroundImage,VStack,Container,HStack, Text} from '@chakra-ui/react'

const xd= ()=> {

  const router = useRouter();
  const objeto = router.query;
  const deporte = objeto.deporte;
  const fecha = objeto.fecha;
  console.log("deporte: " + deporte + ", fecha: " + fecha);

  createTheme('custom', {
    text: {primary: '#EAEAEA',secondary: '#2aa198',},background: {default: '#002b36', },context: { background: 'yellow', text: '#FFFFFF',}, divider: {default: '#073642',},action: {button: 'rgba(0,0,0,.54)',hover: 'rgba(0,0,0,.08)',disabled: 'rgba(0,0,0,.12)',},
  }, 'dark');

  const [AbrirModal, setAbrirModal] = useState(false);
  const [AbrirModalOcupado, setAbrirModalOcupado] = useState(false);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [canchaSeleccionada, setCanchaSeleccionada] = useState(null);
  const categoriaSeleccionada= deporte;
  const fechaSeleccionada = new Date(fecha); // Convierte la fecha predefinida en un objeto Date


  const horasPredefinidas = ['12:00', '13:00', '14:00', '15:00', '16:00'];

  const Reservas = [
    {
      id: 1,
      createdAt: '2023-08-06T13:00:00Z',
      updatedAt: '2023-08-06T13:00:00Z',
      starDate: '2023-08-07T16:00:00Z', // PAra cuando es la reserva y la hora de ese dia
      isConfirmed: true,
      userId: 1,
      fieldId: 1,
    },
    {
        id: 2,
        createdAt: '2023-08-06T14:00:00Z',
        updatedAt: '2023-08-06T14:00:00Z',
        starDate: '2023-08-07T13:00:00Z',
        isConfirmed: true,
        userId: 2,
        fieldId: 1,
      },
      {
        id: 3,
        createdAt: '2023-08-06T15:00:00Z',
        updatedAt: '2023-08-06T15:00:00Z',
        starDate: '2023-08-08T16:00:00Z',
        isConfirmed: true,
        userId: 3,
        fieldId: 3,
      },
  ];
const Campos = [
  {
    id: 1,
    createdAt: '2023-08-06T00:00:00Z',
    updatedAt: '2023-08-06T00:00:00Z',
    name: 'Campo 1',
    description: 'Descripción fubol',
    price: 10000,
    categoryId: 1,
    reservations: [],
  },
  {
    id: 2,
    createdAt: '2023-08-06T00:00:00Z',
    updatedAt: '2023-08-06T00:00:00Z',
    name: 'Campo 2',
    description: 'Descripción del Campo 2',
    price: 15000,
    categoryId: 2,
    reservations: [],
  },
  {
    id: 3,
    createdAt: '2023-08-06T00:00:00Z',
    updatedAt: '2023-08-06T00:00:00Z',
    name: 'Campo 3',
    description: 'Descripción fubol',
    price: 15000,
    categoryId: 1,
    reservations: [],
  },
];
const Categorias = [
    {
      id: 1,
      createdAt: '2023-08-06T00:00:00Z',
      updatedAt: '2023-08-06T00:00:00Z',
      name: 'Futbol',
      fields: Campos.filter((campo) => campo.categoryId === 1),
    },
    {
      id: 2,
      createdAt: '2023-08-06T00:00:00Z',
      updatedAt: '2023-08-06T00:00:00Z',
      name: 'Tenis',
      fields: Campos.filter((campo) => campo.categoryId === 2),
    },
    
  ];
  const getColumnForHora = (hora) => ({
    name: hora,
    center: true,
    cell: (row) => {
      const cancha = row;
      const reservasCancha = cancha.reservations;
      const reserva = reservasCancha.find((reserva) => reserva.starDate.includes(hora));
      if (reserva && reserva.isConfirmed) {
        return (
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
        );
      } else {
        return (
          <Button
            onClick={() => handleLibre(cancha, hora,fecha)}
            size="xs"
            width="100px"
            bg="green.500"
            color="green"
            className="btn btn-outline btn-xs"
          >
            <Icon as={BsCheck} color="white" />
          </Button>
        );
      }
    },
  });

// Filtrar las reservas según la categoría seleccionada

const reservasFiltradas = Reservas.filter((reserva) => {
  const cancha = Campos.find((campo) => campo.id === reserva.fieldId);
  if (!cancha) return false;
  const categoria = Categorias.find((cat) => cat.id === cancha.categoryId);

  // Convertir la fecha de starDate a un objeto Date
  const fechaReserva = new Date(reserva.starDate);
  // Comparar por año, mes y día (ignorar la hora)
  return (
    categoria &&
    categoria.name === categoriaSeleccionada &&
    fechaReserva.getFullYear() === fechaSeleccionada.getFullYear() &&
    fechaReserva.getMonth() === fechaSeleccionada.getMonth() &&
    fechaReserva.getDate()-1=== fechaSeleccionada.getDate()
  );
});



// Asignar solo las reservas filtradas a las canchas filtradas
const canchasFiltradas = categoriaSeleccionada === ''
  ? Campos
  : Campos.filter((cancha) => {
      const categoria = Categorias.find((cat) => cat.id === cancha.categoryId);
      return categoria && categoria.name === categoriaSeleccionada;
    }).map((cancha) => ({
      ...cancha,
      reservations: reservasFiltradas.filter((reserva) => reserva.fieldId === cancha.id),
    }));

const columnas = [
        { name: 'Cancha', selector: 'name', sortable: true },
        {   name: 'Deporte',
            selector: (row) => {
              const categoria = Categorias.find((cat) => cat.id === row.categoryId);
              return categoria ? categoria.name : '';
            },
            sortable: true,
          },
        //  columnas para cada hora predefinida
        ...horasPredefinidas.map((hora) => getColumnForHora(hora)),
]; 
  const handleOcupado = () => {
    setAbrirModalOcupado(true);
  };
  const handleCloseModalOcupado = () => {
    // Cerrar el modal
    setAbrirModalOcupado(false);
  };

  const handleLibre = (cancha,hora,fecha) => {
    setCanchaSeleccionada(cancha);
    setHoraSeleccionada(hora);
    setAbrirModal(true);
  };
  const handleCloseModal = () => {
    // Cerrar el modal
    setAbrirModal(false);
  };
  const bodyOcupado=(
<div>
     <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lo sentimos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Esta cancha ya esta reservada</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleCloseModalOcupado}>Salir</Button>
          </ModalFooter>
    </ModalContent>
    </div>
  )
  const tab = '\u00A0';
  const bodyAbrir=(

    <div>
     <ModalOverlay />
        <ModalContent>
          <ModalHeader colorScheme="green" >Crear Reserva</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            {/* Aquí puedes mostrar los detalles de la cancha seleccionada y permitir al usuario ingresar los detalles de la reserva */}
            <p>Nombre de la cancha: {canchaSeleccionada?.name}</p>
            <p>Hora: {horaSeleccionada}</p>
            <p>Fecha: {fecha}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={'handleConfirmReserva'}>Confirmar Reserva</Button>
            <Button colorScheme="red" onClick={handleCloseModal}>Cancelar</Button>
          </ModalFooter>
    </ModalContent>
    </div>
)




  return (
    <Container  margin={'0'} p={'0'} maxW={'full'} maxH={'full'}>
      
      <HStack as="nav" p="10px" bg="#5D3C81" >
        <Heading color={'white'} > <Image src ="/img/Sportify.png" w={'120px'} h={'100px'} /></Heading>
        
        <Spacer/>
        <Button colorScheme='teal' variant='unstyled' color={'white'} mx="100px" fontSize={'28px'} display={'flex'} >
        <Icon as={BsHouseDoor} color={'white'} w={'40px'} h={'37px'}/>
         <Text w={'79px'} h={'37'}>Inicio</Text>
        </Button>
        <Button colorScheme='teal' variant='unstyled' color={'white'} mx="10px">
        <Box><Icon as={SlOptionsVertical} color={'white'}/></Box>
        </Button>
      </HStack>
      <VStack
        m={"0"}
        p={"0"}
        bgImg={"/fondoCancha.jpeg"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
        width={"100%"}
        height={"container.lg"}
      >
        <Heading color={'white'} my={'30px'} p={'15px'} fontFamily={"Poppins , sans-serif"} >Elige tu cancha <Icon as={GiTennisCourt} />  </Heading>
        <VStack >
        <DataTable  

           columns={columnas}  
           data={canchasFiltradas} 
           theme='custom' 
           fixedHeader fixedHeaderScrollHeight='600px'
          />
          <Modal
                 isOpen={AbrirModalOcupado}
                 onClose={handleCloseModalOcupado}>
                 {bodyOcupado}
         </Modal>
          <Modal
                 isOpen={AbrirModal}
                 onClose={handleCloseModal}>
                 {bodyAbrir}
          </Modal>
        </VStack>
      </VStack>
    </Container>
    
  )
}

export default xd