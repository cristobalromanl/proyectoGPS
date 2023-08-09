import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
} from "@chakra-ui/react";
import HomeLayout from "@/components/HomeLayout";
import { getAll } from "@/services/categories";

const overviewList = [
  {
    id: 1,
    label: "Equipo Lince",
    logo: "/logosequipos/team1.png",
    createdAt:"10-08-2023",
  },
  {
    id: 2,
    label: "Equipo Dragon",
    logo: "/logosequipos/team2.png",
    createdAt:"12-07-2023",
  },
  {
    id: 3,
    label: "Equipo Bicho",
    logo: "/logosequipos/team3.png",
    createdAt:"10-09-2023",
  },
  {
    id: 4,
    label: "Equipo L",
    logo: "/logosequipos/team4.png",
    createdAt:"22-09-2023",
  },
  {
    id: 5,
    label: "Equipo Partisano",
    logo: "/logosequipos/team5.png",
    createdAt:"15-08-2023",
  },
  {
    id: 6,
    label: "Equipo Yuste",
    logo: "/logosequipos/team6.png",
    createdAt:"01-09-2023",
  },
  {
    id: 7,
    label: "Equipo MMJ",
    logo: "/logosequipos/team7.png",
    createdAt:"23-07-2023",
  },
  {
    id: 8,
    label: "Equipo Kiku",
    logo: "/logosequipos/team8.png",
    createdAt:"31-07-2023",
  },
];

export default function ReservasPage() {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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

  // Filtrar equipos basados en los valores seleccionados
  const filteredTeams = overviewList.filter((team) => {
    return (
      (values.category === "" || values.category === team.label) &&
      (values.date === "" || values.date === team.createdAt) // Asegúrate de tener la propiedad "date" en tus datos de equipo
    );
  });

  return (
    <HomeLayout>
      <Box p={8}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Listado de Equipos
        </Text>
        <Box mb={4}>
          <Input
            type="text"
            name="category"
            placeholder="Filtrar por categoría"
            value={values.category}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="date"
            placeholder="Filtrar por fecha"
            value={values.date}
            onChange={handleChange}
          />
        </Box>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Equipo</Th>
              <Th>Logo</Th>
              <Th>Fecha creación</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTeams.map((team) => (
              <Tr key={team.id}>
                <Td>{team.label}</Td>
                <Td>
                  <Image src={team.logo} alt={`${team.label} Logo`} height="50px" width="50px" />
                </Td>
                <Td>
                {team.createdAt}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </HomeLayout>
  );
}