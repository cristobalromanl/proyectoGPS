import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsCheck, BsX } from "react-icons/bs";
import { GiTennisCourt } from "react-icons/gi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import DataTable, { createTheme } from "react-data-table-component";
import { Button, Heading, Icon, VStack } from "@chakra-ui/react";
import { getOne as getCategory } from "@/services/categories";
import { getAll as getFields } from "@/services/fields";
import { create as createReservation } from "@/services/reservations";
import { useAuth } from "@/context/AuthContext";
import HomeLayout from "@/components/HomeLayout";

const HORARIOS = ["12:00", "13:00", "14:00", "15:00", "16:00"];

export default function CanchasPage() {
  const router = useRouter();
  const toast = useToast();
  const { user } = useAuth();
  const { category: categoriaSeleccionada, date: fecha } = router.query;
  const [fields, setFields] = useState([]);
  const [category, setCategory] = useState(null);
  const [abrirModal, setAbrirModal] = useState(false);
  const [abrirModalOcupado, setAbrirModalOcupado] = useState(false);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [canchaSeleccionada, setCanchaSeleccionada] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      getCategory(categoriaSeleccionada)
        .then((category) => setCategory(category))
        .catch((_error) => {
          toast({
            title: "Categoría seleccionada no existe.",
            status: "error",
            isClosable: true,
          });
          router.push("/reservas");
        });
      getFields()
        .then((fields) =>
          setFields(
            fields.filter(
              (field) => field.categoryId === parseInt(categoriaSeleccionada)
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
    }
  }, [router.isReady]);

  createTheme(
    "custom",
    {
      text: { primary: "#EAEAEA", secondary: "#2aa198" },
      background: { default: "#002b36" },
      context: { background: "yellow", text: "#FFFFFF" },
      divider: { default: "#073642" },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

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

  const handleLibre = (cancha, hora) => {
    setCanchaSeleccionada(cancha);
    setHoraSeleccionada(hora);
    setAbrirModal(true);
  };

  const getColumnForHora = (hora) => ({
    name: hora,
    center: true,
    cell: (row) => {
      const { reservations } = row;
      const reserva = reservations.find((reserva) => {
        const fechaReserva = new Date(reserva.startDate);

        return fechaReserva.getHours() === parseInt(hora.split(":")[0]);
      });

      if (reserva && reserva.isConfirmed) {
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

  const columns = [
    { name: "Cancha", selector: "name", sortable: true },
    { name: "Deporte", selector: () => category?.name },
    //  columnas para cada hora predefinida
    ...HORARIOS.map((hora) => getColumnForHora(hora)),
  ];

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
          color={"white"}
          my={"30px"}
          p={"15px"}
          fontFamily={"Poppins , sans-serif"}
        >
          Elige tu cancha <Icon as={GiTennisCourt} />
        </Heading>
        <VStack>
          <DataTable
            columns={columns}
            data={fields}
            theme="custom"
            fixedHeader={true}
            fixedHeaderScrollHeight="600px"
          />
          <Modal
            isOpen={abrirModalOcupado}
            onClose={() => setAbrirModalOcupado(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Lo sentimos</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Esta cancha ya esta reservada</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="red"
                  onClick={() => setAbrirModalOcupado(false)}
                >
                  Salir
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
                <p>Nombre de la cancha: {canchaSeleccionada?.name}</p>
                <p>Hora: {horaSeleccionada}</p>
                <p>Fecha: {fecha}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  mr={4}
                  colorScheme="blue"
                  onClick={handleConfirmReserva}
                >
                  Confirmar Reserva
                </Button>
                <Button colorScheme="red" onClick={() => setAbrirModal(false)}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </VStack>
    </HomeLayout>
  );
}
