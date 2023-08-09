import {
  FormControl,
  FormLabel,
  Button,
  Heading,
  Spacer,
  Select,
  VStack,
  HStack,
  Input,
  useToast,
  Switch,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAll } from "@/services/categories";
import HomeLayout from "@/components/HomeLayout";

export default function ReservasPage() {
  const router = useRouter();
  const toast = useToast();
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    category: "",
    date: "",
    match: false,
  });

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
        <Heading
          my={"30px"}
          p={"15px"}
          color={"whiteAlpha.800"}
          backgroundColor={"blackAlpha.100"}
          bold="true"
        >
          VERIFICA DISPONIBILIDAD PARA TU DEPORTE FAVORITO ⚽🥎🏀🏐🏸🔥
        </Heading>
        <VStack spacing={"30px"} my={"25px"}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <HStack backgroundColor={"whiteAlpha.100"}>
                <FormLabel color={"whiteAlpha.800"}>
                  ¿Que deporte quieres hacer?
                </FormLabel>
                <Select
                  id="category"
                  name="category"
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
              <Spacer height={"10px"} />
              <HStack backgroundColor={"blackAlpha.100"}>
                <FormLabel color={"whiteAlpha.800"}>¿Buscas match?</FormLabel>
                <Switch
                  id="match"
                  name="match"
                  isChecked={values.match}
                  onChange={() =>
                    setValues({ ...values, match: !values.match })
                  }
                />
              </HStack>
              <Button type="submit" mt={4} colorScheme="teal">
                Buscar
              </Button>
            </FormControl>
          </form>
        </VStack>
      </VStack>
    </HomeLayout>
  );
}
