
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {SlOptionsVertical} from 'react-icons/sl'
import {BsHouseDoor, BsCheck , BsX} from 'react-icons/bs'
import { GiSoccerField, GiTennisCourt } from "react-icons/gi";
import { Card,Modal, ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Img} from "@chakra-ui/react"
import DataTable, {createTheme} from 'react-data-table-component'
import { Box, Button,  Flex, Heading,Icon, Spacer, BackgroundImage,VStack,Container,HStack, Text} from '@chakra-ui/react'

const xd= ()=> {
 
  createTheme('custom', {
    text: {primary: '#EAEAEA',secondary: '#2aa198',},background: {default: '#002b36', },context: { background: 'yellow', text: '#FFFFFF',}, divider: {default: '#073642',},action: {button: 'rgba(0,0,0,.54)',hover: 'rgba(0,0,0,.08)',disabled: 'rgba(0,0,0,.12)',},
  }, 'dark');

  const [AbrirModal, setAbrirModal] = useState(false);
  const [AbrirModalOcupado, setAbrirModalOcupado] = useState(false);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [canchaSeleccionada, setCanchaSeleccionada] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  
  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };
  const horasPredefinidas = ['12:00', '13:00', '14:00', '15:00', '16:00'];
  const dataCanchas = [//llamar a la bdd y asignar la data por aca lksdsd
    {
      category: 'Futbol',
      canchas: [
        { nombre: 'Cancha 1', '12:00': false, '13:00': false, '14:00': false, '15:00': true, '16:00': false },
        { nombre: 'Cancha 2', '12:00': true, '13:00': false, '14:00': true, '15:00': false, '16:00': true },
      ],
    },
    {
      category: 'Tenis',
      canchas: [
        { nombre: 'Tenis 1', '12:00': true, '13:00': true, '14:00': false, '15:00': true, '16:00': false },
        { nombre: 'Tenis 2 ', '12:00': true, '13:00': false, '14:00': true, '15:00': false, '16:00': true },
      ],
    },

  ];

  const getColumnForHora = (hora) => ({ 
    
    name: hora,
    center: true,
    cell: (row) => {
      const cancha=row;
      const isCanchaOcupada = row[hora]; //  estado de ocupación de la cancha desde segun los datos del backend
      const ButtonComponent = isCanchaOcupada ? (
        <Button onClick={() => handleOcupado()} size="xs" width="100px" bg="red.500" color="red" className="btn btn-outline btn-xs">
          <Icon as={BsX} color="white" />
        </Button>
      ) : (
        <Button onClick={() => handleLibre(cancha, hora)} size="xs" width="100px" bg="green.500" color="green" className="btn btn-outline btn-xs">
          <Icon as={BsCheck} color="white" />
        </Button>
      );return ButtonComponent;
    }
  });
  const handleOcupado = () => {
    setAbrirModalOcupado(true);
  };
  const handleCloseModalOcupado = () => {
    // Cerrar el modal
    setAbrirModalOcupado(false);
  };

  const handleLibre = (cancha,hora) => {
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
            <p>Nombre de la cancha: {canchaSeleccionada?.nombre}</p>
            <p>Hora: {horaSeleccionada}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={'handleConfirmReserva'}>Confirmar Reserva</Button>
            <Button colorScheme="red" onClick={handleCloseModal}>Cancelar</Button>
          </ModalFooter>
    </ModalContent>
    </div>
)
  const canchasFiltradas = 
  categoriaSeleccionada === ''
    ?  dataCanchas.flatMap((categoria)=> categoria.canchas)
    : dataCanchas.find((categoria) => categoria.category === categoriaSeleccionada)?.canchas || [];

  const columnas = [
    { name: 'Cancha', selector: 'nombre', sortable: true },
    //  columnas para cada hora predefinida
    ...horasPredefinidas.map((hora) => getColumnForHora(hora)),
  
  ];
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
      <VStack backgroundImage= " url(../../background.png)" width={'full'} height={' container.lg'}>
        <Heading color={'white'} my={'30px'} p={'15px'} fontFamily={"Poppins , sans-serif"} >Elige tu cancha <Icon as={GiTennisCourt} />  </Heading>
        <VStack >
        <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={() => handleCategoriaSeleccionada('Futbol')}>Futbol</Button>
        <Button onClick={() => handleCategoriaSeleccionada('Tenis')}>Tenis</Button>
        </div>

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