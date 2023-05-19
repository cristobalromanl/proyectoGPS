import React from 'react'
import {SlOptionsVertical} from 'react-icons/sl'
import {BsHouseDoor} from 'react-icons/bs'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
    Box,
    Button,
    Heading,
    Icon,
    Image,
    Spacer,
    Flex,
    VStack,
    Container,
    HStack,
    Text
  } from '@chakra-ui/react'

  
const reservas= ()=> {
  return (
    <Container  margin={'0'} p={'0'} maxW={'full'} maxH={'full'}>
      <HStack as="nav" p="10px" bg="#5D3C81">
        <Heading color={'white'}><Image src='/Sportify.png' w={'110px'} h={'100'}/></Heading>
        <Spacer/>
        <Button colorScheme='teal' variant='unstyled' color={'white'} mx="100px" fontSize={'28px'} display={'flex'} >
        <Icon as={BsHouseDoor} color={'white'} w={'48px'} h={'45px'}/>
         <Text w={'79px'} h={'42'}>Inicio</Text>
        </Button>
        <Button colorScheme='teal' variant='unstyled' color={'white'} mx="20px">
        <Box><Icon w={'45px'} h={'45px'} as={SlOptionsVertical} color={'white'}/></Box>
        </Button>
      </HStack>
      <VStack bg={"#c08ee1"} width={'full'} height={' container.lg'}>
        <Heading my={'30px'} p={'15px'}>Selecciona el deporte </Heading>
        <VStack spacing={'30px'} my={'25px'}>
        <HStack spacing={'30px'}> 
        <Card bg={'#c08ee1'} w={'250px'} h={'252px'}transition={['0.3s', 'ease']}  boxShadow={'dark-lg'} cursor={'pointer'} onClick={()=>{console.log("Futbolito")}}>
            <CardBody>
              <Flex direction={'column'} alignContent={'center'} justify={'center'}>
                <Heading textAlign="center">Futbolito</Heading>
                <Image mx={'29px'} h={'130px'} w={'140px'} src='https://cdn.discordapp.com/attachments/723251921393025028/1108953429147131955/asfasdf.png'/>
              </Flex> 
            </CardBody>
          </Card>
          <Card bg={'#c08ee1'} w={'250px'} h={'252px'}transition={['0.3s', 'ease']}  boxShadow={'dark-lg'} cursor={'pointer'} onClick={()=>{console.log("Tenis")}}>
            <CardBody>
              <Flex direction={'column'} alignContent={'center'} justify={'center'} >
                <Heading textAlign="center">Tenis</Heading>
                <Image mx={'29px'} h={'130px'} w={'140px'} src='https://cdn.discordapp.com/attachments/723251921393025028/1108953502291599411/tenis.png'/>
              </Flex> 
            </CardBody>
          </Card>
          <Card bg={'#c08ee1'} w={'250px'} h={'252px'} transition={['0.3s', 'ease']}  boxShadow={'dark-lg'} cursor={'pointer'}>
            <CardBody>
              <Flex direction={'column'} alignContent={'center'} justify={'center'} onClick={()=>{console.log("Basketball")}}>
                <Heading textAlign="center">Basketball</Heading>
                <Image mx={'29px'} h={'130px'} w={'140px'} src='https://cdn.discordapp.com/attachments/723251921393025028/1108953551474004058/i.png'/>
              </Flex> 
            </CardBody>
          </Card>
        </HStack>
        <HStack spacing={'30px'}>
        <Card bg={'#c08ee1'} w={'250px'} h={'252px'} transition={['0.3s', 'ease']}  boxShadow={'dark-lg'} cursor={'pointer'} onClick={()=>{console.log("Padel")}}>
            <CardBody>
              <Flex direction={'column'} alignContent={'center'} justify={'center'}>
                <Heading textAlign="center">Padel</Heading>
                <Image mx={'56px'} h={'130px'} w={'140px'} src='https://cdn.discordapp.com/attachments/723251921393025028/1108953751391309874/raqueta-de-padel.png'/>
              </Flex> 
            </CardBody>
          </Card>
          <Card bg={'#c08ee1'} w={'250px'} h={'252px'} transition={['0.3s', 'ease']}  boxShadow={'dark-lg'} cursor={'pointer'} onClick={()=>{console.log("Voley")}}>
            <CardBody>
              <Flex direction={'column'} alignContent={'center'} justify={'center'}>
                <Heading textAlign="center">Voley</Heading>
                <Image mx={'29px'} h={'130px'} w={'140px'} src='https://cdn.discordapp.com/attachments/723251921393025028/1108953959995035688/cuadra.png'/>
              </Flex> 
            </CardBody>
          </Card>

        </HStack>
        </VStack>
      </VStack>
    </Container>
    
  )
}

export default reservas