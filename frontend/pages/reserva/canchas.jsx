import React from 'react'
import {SlOptionsVertical} from 'react-icons/sl'
import {BsHouseDoor, BsCheck , BsX} from 'react-icons/bs'
import { GiSoccerField, GiTennisCourt } from "react-icons/gi";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Img} from "@chakra-ui/react"
import DataTable, {createTheme} from 'react-data-table-component'
import { Box, Button,  Flex, Heading,Icon, Spacer, BackgroundImage,VStack,Container,HStack, Text} from '@chakra-ui/react'
/*
const peticionDelete=async()=>{
  await axios.delete(`${process.env.servidor}/gasto/delete/`+ GastoSeleccionado._id +"/"+ id_admin )
  .then(response=>{
          setUsers(users.filter(gasto=>gasto._id!==GastoSeleccionado._id));
          abrirCerrarModalEliminar();
          
          console.log(GastoSeleccionado);
  }).catch(error=>{
      
      console.log(error);
      })
}
const peticionPut=async()=>{
  await axios.put(`${process.env.servidor}/gasto/update/`+ GastoSeleccionado._id + "/"+ id_admin,GastoSeleccionado)
          .then(response=>{
              var dataNueva= users;
              dataNueva.map(gasto=>{
              if(gasto._id===GastoSeleccionado._id){  
              }
              });
              setUsers(dataNueva);
              abrirCerrarModalEditar();
              showData();
              console.log(GastoSeleccionado);
              console.log(id_admin);
          }).catch(error=>{
              console.log(error);
          })
          }*/
//La funciones de arribas son las que implemente en otro proyecto para actulizar los gastos y borrarlos, igual puedo hacerlo para agregar practicamente 
//Respecto a las fechas puedo crear un funcion que asigne las fechas (Para agregarlas a la bdd como ocupadas) (Segun lo que vi con el nico)
const reservas= ()=> {
  createTheme('custom', {
    text: {
        primary: '#EAEAEA',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: 'yellow',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
    }, 'dark');

  const tablaprueba=[ 
  {fecha:"20/05/23",hora:"12:00"}, 
  {fecha:"20/05/23",hora:"13:00"}, 
  {fecha:"20/05/23",hora:"14:00"}, 
  {fecha:"20/05/23",hora:"15:00"}, 
  {fecha:"20/05/23",hora:"16:00"} 
];
  const columnas=[
  {name: 'Hora', selector: 'hora'},
  {name: 'Cancha 1',center:true, cell: row => {
    //En el boton debo crear una funcion para la que el espacio de la cancha este ocupado (y dejarlo en la bdd, creo jeje)
    return (
        <>
             <Button  onClick="Ocupado"size={'xs'} width={'100px'} bg={'green.500'} color={'green'} className="btn btn-outline btn-xs" >
                <Icon as={BsCheck}   color={'white'} />
            </Button> 

        </>);}},
  {name: 'Cancha 2',center:true, cell: row => {
    //En el boton debo crear una funcion para la que el espacio de la cancha este ocupado (y dejarlo en la bdd, creo jeje)
    return (
        <>
             <Button  onClick="Libre"size={'xs'} width={'100px'} bg={'red.500'} color={'red'} className="btn btn-outline btn-xs" >
                <Icon as={BsX} color={'black'}   />
            </Button> 

        </>
        //Tambien crear una funcion que llame a otra(cuando este en estado libre o sin estado) para acceder al boton y poder mostrar las canchas ocupadas podria crear un if (si dice ocupado) podria simplemente mostrar otro boton en rojo que no haga nada ya que esta ocupada y reservada (Algo asi xd)
        );}},
  {name: 'Cancha 3',center:true,cell: row => {
    //En el boton debo crear una funcion para la que el espacio de la cancha este ocupado (y dejarlo en la bdd, creo jeje)
    return (
        <>
             <Button  onClick="Libre"size={'xs'} width={'100px'} bg={'green.500'} color={'green'} className="btn btn-outline btn-xs" >
                <Icon as={BsCheck} color={'white'}  />
            </Button> 

        </>);}}
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
      <VStack bg={"#C08EE1"} width={'full'} height={' container.lg'}>
        <Heading color={'white'} my={'30px'} p={'15px'} fontFamily={"Poppins , sans-serif"} >Elige tu cancha <Icon as={GiTennisCourt} />  </Heading>
        <VStack >
        <DataTable  

           columns={columnas}  
           data={tablaprueba} 
           theme='custom' 
           fixedHeader fixedHeaderScrollHeight='600px'
          />

        </VStack>
      </VStack>
    </Container>
    
  )
}

export default reservas