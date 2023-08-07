import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { BsHouseDoor } from "react-icons/bs";
import { useRouter } from "next/router";
import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Spacer,
  Select,
  VStack,
  Container,
  HStack,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const reservas = () => {
  const [values, setvalues] = useState({
    deporte: "",
    fecha: "",
  });
  const router = useRouter();
  const onChange = (e) => {
    setvalues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { deporte, fecha } = values;
    alert(values);
    console.log(values);
    router.push({
      pathname: `./cancha/${values}`,

      query: values,
    });
  };

  return (
    <Container margin={"0"} p={"0"} maxW={"full"} maxH={"full"}>
      <HStack as="nav" p="10px" bg="#5D3C81">
        <Heading color={"white"}>
          <Image src="/Sportify.png" w={"110px"} h={"100"} />
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
          <Icon as={BsHouseDoor} color={"white"} w={"48px"} h={"45px"} />
          <Text w={"79px"} h={"42"}>
            Inicio
          </Text>
        </Button>
        <Button colorScheme="teal" variant="unstyled" color={"white"} mx="20px">
          <Box>
            <Icon
              w={"45px"}
              h={"45px"}
              as={SlOptionsVertical}
              color={"white"}
            />
          </Box>
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
        <Heading
          my={"30px"}
          p={"15px"}
          color={"whiteAlpha.800"}
          backgroundColor={"blackAlpha.100"}
          Bold
        >
          VERIFICA DISPONIBILIDAD PARA TU DEPORTE FAVORITO ⚽🥎🏀🏐🏸🔥
        </Heading>
        <VStack spacing={"30px"} my={"25px"}>
          <FormControl>
            <HStack backgroundColor={"whiteAlpha.100"}>
              <FormLabel color={"whiteAlpha.800"}>
                ¿Que deporte quieres hacer?
              </FormLabel>
              <Select
                variant={"filled"}
                name={"deporte"}
                placeholder="Elige el deporte"
                onChange={onChange}
              >
                <option>Futbol</option>
                <option>Padel</option>
                <option>Basketball</option>
                <option>Tenis</option>
                <option>Voleiball</option>
              </Select>
            </HStack>
            <Spacer height={"10px"} />
            <HStack backgroundColor={"blackAlpha.100"}>
              <FormLabel color={"whiteAlpha.800"}>Elige la fecha</FormLabel>
              <Input
                color={"whiteAlpha.800"}
                name={"fecha"}
                placeholder="dd-mm-yy"
                size="md"
                type="date"
                onChange={onChange}
              />
            </HStack>
            <Button
              mt={4}
              colorScheme="teal"
              type={"submit"}
              onClick={handleSubmit}
            >
              Buscar
            </Button>
          </FormControl>
        </VStack>
      </VStack>
    </Container>
  );
};

export default reservas;
