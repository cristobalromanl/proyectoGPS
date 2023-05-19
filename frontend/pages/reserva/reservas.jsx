import React from 'react'
import {SlOptionsVertical} from 'react-icons/sl'
import {BsHouseDoor} from 'react-icons/bs'
import Logo from './mbape.jpg'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Spacer,
    BackgroundImage,
    VStack,
    Container,
    HStack,
    Text
  } from '@chakra-ui/react'

 
const reservas= ()=> {
  return (
    <Container  margin={'0'} p={'0'} maxW={'full'} maxH={'full'}>
      <Image src='Sportify.jpg'/>
      <HStack as="nav" p="10px" bg="#5D3C81">
        <Heading color={'white'} >Sportify</Heading>
        <Spacer/>
        <Button colorScheme='teal' variant='unstyled' color={'white'} mx="20px">
        <Icon as={BsHouseDoor} color={'white'} mx="2px"/>
          Inicio
        </Button>
        <Button colorScheme='teal' variant='unstyled' color={'white'} mx="10px">
        <Box><Icon as={SlOptionsVertical} color={'white'}/></Box>
        </Button>
      </HStack>
      <VStack bg={"gray.300"} width={'full'} height={' container.lg'}>
        <Heading my={'30px'} p={'15px'}>Selecciona el deporte </Heading>
        <VStack spacing={'30px'} my={'25px'}>
        <HStack spacing={'30px'}> 
          <Box bg={'red.300'} w={'250px'} h={'256px'} onClick={()=>{alert("futbol")}}>futbolito</Box>
          <Card bg={'red.300'} w={'250px'} h={'256px'}>
            <CardHeader>
              <Heading textAlign="center">Tenis</Heading>
              <Box>
              <Image src='Sportify.jpg'/>
              </Box>
            </CardHeader>
          </Card>
          <Box bg={'red.300'} w={'250px'} h={'256px'}>BasketBall</Box>
        </HStack>
        <HStack spacing={'30px'}>
          <Box bg={'red.300'} w={'250px'} h={'256px'}>Padel</Box>
          <Box bg={'red.300'} w={'250px'} h={'256px'}>Voleibol</Box>

        </HStack>
        </VStack>
      </VStack>
    </Container>
    
  )
}

export default reservas