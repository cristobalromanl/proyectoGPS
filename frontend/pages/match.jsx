import {
  Box,
  Image,
  Button,
  VStack,
  Heading,
  SimpleGrid,
  Card,
  Stack,
  HStack,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { getAll as getCategories } from "@/services/categories";
import { getOne as getClub } from "@/services/club";
import {
  getAll as getReservations,
  update as updateReservation,
} from "@/services/reservations";
import HomeLayout from "@/components/HomeLayout";

export default function MatchPage() {
  const router = useRouter();
  const toast = useToast();
  const { user, loading } = useAuth();
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [matches, setMatches] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleDesafiar = async () => {
    console.log({ selectedCardId, user });
    try {
      await updateReservation({
        id: selectedCardId,
        clubMatchId: user.club?.id,
      });

      toast({
        title: "Match realizado correctamente.",
        status: "success",
        isClosable: true,
      });

      router.push("/home");
    } catch (error) {
      setSelectedCardId(null);

      toast({
        title: "Error al realizar el match. Intentelo más tarde.",
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getCategories()
      .then((categorias) => setCategories(categorias))
      .catch((_error) =>
        toast({
          title: "Error al obtener los datos. Intentelo más tarde.",
          status: "error",
          isClosable: true,
        })
      );
  }, []);

  useEffect(() => {
    if (!loading) {
      getClub(user.club?.id).catch((_error) => {
        toast({
          title: "Necesita ser parte de un club, para el match.",
          status: "error",
          isClosable: true,
        });
        router.push("/home");
      });
    }
  }, [loading]);

  useEffect(() => {
    getReservations()
      .then((reservations) =>
        setMatches(
          reservations.filter(
            (res) =>
              res.match &&
              res.field.categoryId === parseInt(categoryId) &&
              res.user.club?.id !== user.club?.id
          )
        )
      )
      .catch((_error) =>
        toast({
          title: "Error al obtener los datos. Intentelo más tarde.",
          status: "error",
          isClosable: true,
        })
      );
  }, [categoryId]);

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
              Selecciona equipo: ⚽🥎🏀🏐🏸🔥
            </Heading>
            <Select
              id="categoryId"
              name="categoryId"
              width={"20%"}
              variant="filled"
              placeholder="Elige el deporte"
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </HStack>

          <VStack spacing={"30px"} my={"25px"}>
            {matches.length === 0 && (
              <Box fontFamily="Inter">No hay match disponibles</Box>
            )}
            {matches.length > 0 && (
              <VStack align="center" justify="center">
                <SimpleGrid
                  width={"100vh"}
                  spacing={4}
                  pt={4}
                  templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                >
                  {matches.map((res) => (
                    <Card
                      key={res.id}
                      align="center"
                      _hover={{
                        fontSize: "2xl",
                        bg: "myColor.Aqua",
                      }}
                      bg={
                        selectedCardId === res.id ? "myColor.Aqua" : "#f5f5f5"
                      }
                      cursor="pointer"
                      onClick={() => setSelectedCardId(res.id)}
                    >
                      <Stack p={4} align="center">
                        <Heading size="md">
                          Equipo {res.user.club?.name}
                        </Heading>
                        <Image
                          src={res.user.club?.logoPath}
                          height="160px"
                          width="160px"
                        />
                        <Box>
                          {new Date(res.startDate).toLocaleDateString("es")}
                        </Box>
                        <Box>
                          {new Date(res.startDate).toLocaleTimeString("es")}
                        </Box>
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
                    onClick={handleDesafiar}
                  >
                    Desafiar
                  </Button>
                </Box>
              </VStack>
            )}
          </VStack>
        </Box>
      </VStack>
    </HomeLayout>
  );
}
