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
  useToast,
} from "@chakra-ui/react";
import HomeLayout from "@/components/HomeLayout";

import { useRouter } from "next/router";
import { getAll } from "@/services/clubs";

export default function ReservasPage() {
  const toast = useToast();
  const router = useRouter();

  const [clubs, setClubs] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    getAll()
      .then((fetchedClubs) => setClubs(fetchedClubs))
      .catch((_error) =>
        toast({
          title: "Error al obtener los datos. Intentelo más tarde.",
          status: "error",
          isClosable: true,
        })
      );
  }, []);

  const filteredClubs = clubs.filter((club) => {
    const filterText = filter.toLowerCase();
    return (
      club.name.toLowerCase().includes(filterText) ||
      formatDate(club.createdAt).includes(filterText)
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
            placeholder="Filtrar tabla"
            value={filter}
            onChange={handleChange}
          />
        </Box>
        <Box mb={4}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Equipo</Th>
                <Th>Logo</Th>
                <Th>Fecha de Creación</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredClubs.map((club) => (
                <Tr key={club.id}>
                  <Td>{club.name}</Td>
                  <Td>
                    <Image
                      src={club.logoPath}
                      alt={`${club.name} Logo`}
                      height="100px"
                      width="100px"
                    />
                  </Td>
                  <Td>{formatDate(club.createdAt)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </HomeLayout>
  );
}