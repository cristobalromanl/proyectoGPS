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

import { useRouter } from "next/router";
import { getAll } from "@/services/clubs";

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
    setFilter(e.target.value);
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
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
      .then((fetchedClubs) => setClubs(fetchedClubs))
      .catch((_error) =>
        toast({
          title: "Error al obtener los datos. Intentelo más tarde.",
          status: "error",
          isClosable: true,
        })
      );
    router.push("/listaclubs");
  }, []);

  const handleLibre = (club) => {
    setCanchaSeleccionada(club);
    setAbrirModal(true);
  };

  const filteredClubs = clubs.filter((club) => {
    const filterText = filter.toLowerCase();
    return (
      club.name.toLowerCase().includes(filterText) ||
      formatDate(club.createdAt).includes(filterText)
    );
  });
  const handleConfirmReserva = async () => {
    try {
      await createReservation({
        startDate: new Date(`${fecha} ${horaSeleccionada}`),
        userId: user.id,
        fieldId: canchaSeleccionada.id,
        isConfirmed: true,
      });

      toast({
        title: "¡Felicidades! Su reserva se ha registrado correctamente.",
        status: "success",
        isClosable: true,
      });

      router.push("/reservas");
    } catch (error) {
      toast({
        title: "Error al realizar la reserva. Intentelo más tarde.",
        status: "error",
        isClosable: true,
      });
    }
  };
  const getColumnForClub = (name) => ({
    center: true,
    cell: (row) => {
      const { clubs } = row;
      const club = clubs.find((club) => {
        const fechaCreacion = new Date(reserva.startDate);
        const nombreSeleccionado = new Date(fecha);

        return (
          fechaCreacion.getFullYear() === nombreSeleccionado.getFullYear() &&
          fechaCreacion.getMonth() === nombreSeleccionado.getMonth() &&
          fechaCreacion.getDate() === nombreSeleccionado.getDate() + 1 &&
          fechaCreacion.getHours() === parseInt(hora.split(":")[0])
        );
      });

      if (club && club.isConfirmed) {
        return (
          <Button
            onClick={() => setAbrirModalOcupado(true)}
            size="xs"
            width="100px"
            bg="red.500"
            color="red"
            className="btn btn-outline btn-xs"
          >
            <Icon as={BsX} color="white" />
          </Button>
        );
      }

      return (
        <Button
          onClick={() => handleLibre(row, hora)}
          size="xs"
          width="100px"
          bg="green.500"
          color="green"
          className="btn btn-outline btn-xs"
        >
          <Icon as={BsCheck} color="white" />
        </Button>
      );
    },
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
        <Box mb={4}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Equipo</Th>
                <Th>Logo</Th>
                <Th>Fecha de Creación</Th>
              </Tr>
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
