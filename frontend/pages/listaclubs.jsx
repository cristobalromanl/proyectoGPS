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
  Button,
  Modal,
  Select,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import HomeLayout from "@/components/HomeLayout";
import { getAll } from "@/services/categories";

const overviewList = [
  {
    id: 1,
    label: "Equipo Lince",
    logo: "/logosequipos/team1.png",
    registeredAt:"10-08-2023",
    sportType: "Fútbol"
  },
  {
    id: 2,
    label: "Equipo Dragon",
    logo: "/logosequipos/team2.png",
    registeredAt:"12-07-2023",
    sportType: "Fútbol"
  },
  {
    id: 3,
    label: "Equipo Bicho",
    logo: "/logosequipos/team3.png",
    registeredAt:"10-09-2023",
    sportType: "Padel"
  },
  {
    id: 4,
    label: "Equipo L",
    logo: "/logosequipos/team4.png",
    registeredAt:"22-09-2023",
    sportType: "Tenis"
  },
  {
    id: 5,
    label: "Equipo Partisano",
    logo: "/logosequipos/team5.png",
    registeredAt:"15-08-2023",
    sportType: "Padel"
  },
  {
    id: 6,
    label: "Equipo Yuste",
    logo: "/logosequipos/team6.png",
    registeredAt:"01-09-2023",
    sportType: "Tenis"
  },
  {
    id: 7,
    label: "Equipo MMJ",
    logo: "/logosequipos/team7.png",
    registeredAt:"23-07-2023",
    sportType: "Fútbol"
  },
  {
    id: 8,
    label: "Equipo Kiku",
    logo: "/logosequipos/team8.png",
    registeredAt:"31-07-2023",
    sportType: "Padel"
  },
];

export default function ReservasPage() {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newTeamName, setNewTeamName] = useState(""); // Nuevo estado para el nombre del nuevo equipo
  const [overviewList, setOverviewList] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();

  const handleChange = (e) => {
    setFilter(e.target.value); // Actualizar el estado del filtro
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

    const handleCreateTeam = () => {
      if (newTeamName && selectedCategory) {
        const newTeam = {
          id: Date.now(),
          label: newTeamName,
          logo: selectedFile ? URL.createObjectURL(selectedFile) : "/logosequipos/default.png",
          registeredAt: new Date().toLocaleDateString(),
          sportType: selectedCategory,
        };

        setOverviewList([...overviewList, newTeam]); // Actualizamos el estado de la lista de equipos
        setNewTeamName("");
        setSelectedCategory("");
        setSelectedFile(null);

        toast({
          title: "Equipo creado con éxito.",
          status: "success",
          isClosable: true,
        });

        onClose();
      }
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
    const filterText = filter.toLowerCase(); // Convertir el filtro a minúsculas
    return (
      team.label.toLowerCase().includes(filterText) ||
      team.registeredAt.includes(filterText) || team.sportType.toLowerCase().includes(filterText)
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
            placeholder="Filtrar tabla por nombre del club o fecha"
            value={filter}
            onChange={handleChange}
          />
        </Box>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Equipo</Th>
              <Th>Logo</Th>
              <Th>Fecha de Creación</Th>
              <Th>Tipo de Deporte</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredTeams.map((team) => (      //Mostrar los datos en la tabla
              <Tr key={team.id}>
                <Td>{team.label}</Td>
                <Td>
                  <Image src={team.logo} alt={`${team.label} Logo`} height="50px" width="50px" />
                </Td>
                <Td>{team.registeredAt}</Td>
                <Td>{team.sportType}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Box display="flex" justifyContent="center" mt={8}>
          <Button onClick={onOpen} colorScheme="teal">
            Crear Nuevo Club
          </Button>
        </Box>
      </Box>



      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Nuevo Club</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nombre del Club</FormLabel>
              <ChakraInput
                placeholder="Ingrese el nombre del club"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tipo de Categoría</FormLabel>
              <Select
                placeholder="Seleccione el tipo de categoría"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="futbol">Fútbol</option>
                <option value="padel">Padel</option>
                <option value="tenis">Tenis</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Logo del Equipo</FormLabel>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateTeam}>
              Crear
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </HomeLayout>
  );
}