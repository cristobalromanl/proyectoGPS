import {
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  useColorModeValue,
  VStack,
  Heading,
  SimpleGrid,
  Card,
  Stack,
  HStack,
  Select,
  useToast,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAll } from "@/services/categories";
import HomeLayout from "@/components/HomeLayout";

const overviewList = [
  {
    id: 1,
    label: "Equipo Lince",
    logo: "/logosequipos/team1.png",
  },
  {
    id: 2,
    label: "Equipo Dragon",
    logo: "/logosequipos/team2.png",
  },
  {
    id: 3,
    label: "Equipo Bicho",
    logo: "/logosequipos/team3.png",
  },
  {
    id: 4,
    label: "Equipo L",
    logo: "/logosequipos/team4.png",
  },
  {
    id: 5,
    label: "Equipo Partisano",
    logo: "/logosequipos/team5.png",
  },
  {
    id: 6,
    label: "Equipo Yuste",
    logo: "/logosequipos/team6.png",
  },
  {
    id: 7,
    label: "Equipo MMJ",
    logo: "/logosequipos/team7.png",
  },
  {
    id: 8,
    label: "Equipo Kiku",
    logo: "/logosequipos/team8.png",
  },
];

export default function ReservasPage() {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    category: "",
    date: "",
  });

  const toast = useToast();
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push({ pathname: "/canchas", query: values });
  };

  useEffect(() => {
    getAll()
      .then((categorias) => setCategories(categorias))
      .catch((_error) =>
        toast({
          title: "Error al obtener los datos. Intentelo más tarde.",
          status: "error",
          isClosable: true,
        })
      );
  }, []);

  return (
    <HomeLayout>
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
        <Box
          w={"80%"}
          h={"90%"}
          bg={"rgba(255, 255, 255, 0.1)"}
          p={10}
          align="center"
        >
          <HStack backgroundColor={"blackAlpha.100"}>
            <Heading
              my={"30px"}
              p={"15px"}
              width={"70%"}
              color={"whiteAlpha.800"}
              bold="true"
            >
              Selecciona tu equipo: ⚽🥎🏀🏐🏸🔥
            </Heading>
            <Select
              id="category"
              name="category"
              width={"20%"}
              variant="filled"
              placeholder="Elige el deporte"
              onChange={onChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </HStack>

          <VStack spacing={"30px"} my={"25px"}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <VStack align="center" justify="center">
                  <SimpleGrid
                    width={"100vh"}
                    spacing={4}
                    pt={4}
                    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                  >
                    {overviewList.map((data) => (
                      <Card
                        align="center"
                        _hover={{
                          fontSize: "2xl",
                          bg: "myColor.Aqua",
                        }}
                        bg={
                          selectedCardId === data.id
                            ? "myColor.Aqua"
                            : "#f5f5f5"
                        }
                        cursor="pointer"
                        onClick={() => handleCardClick(data.id)}
                      >
                        <Stack p={4} align="center">
                          <Heading size="md">{data.label}</Heading>
                          <Image src={data.logo} height="160px" width="160px" />
                        </Stack>
                      </Card>
                    ))}
                  </SimpleGrid>
                  <Box>
                    <Button
                      mt={8}
                      bg="#5d3c81"
                      color="white"
                      fontSize={"xl"}
                      _hover={{
                        fontSize: "2xl",
                      }}
                    >
                      Desafiar
                    </Button>
                  </Box>
                </VStack>
                <Spacer height={"10px"} />
                <HStack backgroundColor={"blackAlpha.100"}>
                  <FormLabel color={"whiteAlpha.800"}>Elige la fecha</FormLabel>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    color={"whiteAlpha.800"}
                    placeholder="dd-mm-yy"
                    size="md"
                    onChange={onChange}
                  />
                </HStack>
                <Button type="submit" mt={4} colorScheme="teal">
                  Buscar
                </Button>
              </FormControl>
            </form>
          </VStack>
        </Box>
      </VStack>
    </HomeLayout>
  );
}

const menuMatch = () => {
  const navBg = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const linkColor = useColorModeValue("myColor.Snow", "myColor.Snow");
  const singIColor = useColorModeValue("myColor.Aqua", "myColor.Aqua");
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };
  return (
    // NavBar
    <HomeLayout>
      <Box fontFamily={"Inter"}>
        <Flex
          height="90vh"
          justifyContent="center"
          alignItems={"center"}
          display="flex"
          backgroundImage={
            " linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.40)), url(./background.png)"
          }
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundColor="rgba(0, 0, 0, 0.25)"
        >
          <Box w={"80%"} h={"90%"} bg={"myColor.Snow"} p={10} align="center">
            <Stack spacing={4}>
              <HStack>
                <Heading width={"100%"}>Selecciona equipo:</Heading>
                <Select placeholder="Selecciona categoría" width={"100%"}>
                  <option value="option1">Futbol</option>
                  <option value="option2">Tenis</option>
                  <option value="option3">Basquet</option>
                  <option value="option3">Padel</option>
                </Select>
              </HStack>

              <HStack>
                <SimpleGrid
                  width={"100%"}
                  spacing={4}
                  pt={4}
                  templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                >
                  {overviewList.map((data) => (
                    <Card
                      align="center"
                      _hover={{
                        fontSize: "2xl",
                        bg: "myColor.Aqua",
                      }}
                      bg={
                        selectedCardId === data.id ? "myColor.Aqua" : "#f5f5f5"
                      }
                      cursor="pointer"
                      onClick={() => handleCardClick(data.id)}
                    >
                      <Stack p={4} align="center">
                        <Heading size="md">{data.label}</Heading>
                        <Image src={data.logo} height="160px" width="160px" />
                      </Stack>
                    </Card>
                  ))}
                </SimpleGrid>
                <Box>
                  <Button
                    mt={8}
                    bg="#5d3c81"
                    color="white"
                    fontSize={"xl"}
                    _hover={{
                      fontSize: "2xl",
                    }}
                  >
                    Desafiar
                  </Button>
                </Box>
              </HStack>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </HomeLayout>
  );
};
