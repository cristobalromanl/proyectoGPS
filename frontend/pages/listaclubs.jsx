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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import HomeLayout from "@/components/HomeLayout";

import { useRouter } from "next/router";
import { getAll } from "@/services/clubs";

export default function ReservasPage() {
  const toast = useToast();
  const router = useRouter();

  const [clubs, setClubs] = useState([]);
  const [filter, setFilter] = useState("");
  const [abrirModal, setAbrirModal] = useState(false);
  const [abrirModalOcupado, setAbrirModalOcupado] = useState(false);

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
        <Modal
          isOpen={abrirModalOcupado}
          onClose={() => setAbrirModalOcupado(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader colorScheme="green">Crear Reserva</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Nombre club: </FormLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  mb={4}
                  borderColor="gray.400"
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{
                    borderColor: "gray.600",
                  }}
                  onChange={handleChange}
                />
                <FormLabel>Logo: </FormLabel>
                <Input
                  id="logo"
                  type="text"
                  name="logo"
                  placeholder="https://www.servidor.cl/imagen"
                  mb={4}
                  borderColor="gray.400"
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{
                    borderColor: "gray.600",
                  }}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button mr={4} colorScheme="blue" onClick={handleConfirmReserva}>
                Confirmar Reserva
              </Button>
              <Button colorScheme="red" onClick={() => setAbrirModal(false)}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={abrirModal} onClose={() => setAbrirModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader colorScheme="green">Crear Reserva</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Aquí puedes mostrar los detalles de la cancha seleccionada y permitir al usuario ingresar los detalles de la reserva */}
              <p>Nombre de la cancha: </p>
              <p>Hora: </p>
              <p>Fecha: </p>
            </ModalBody>
            <ModalFooter>
              <Button mr={4} colorScheme="blue" onClick={handleConfirmReserva}>
                Confirmar Reserva
              </Button>
              <Button colorScheme="red" onClick={() => setAbrirModal(false)}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button
          bg={"black "}
          color="white"
          onClick={() => setAbrirModalOcupado(true)}
        >
          Crear club
        </Button>
      </Box>
    </HomeLayout>
  );
}
