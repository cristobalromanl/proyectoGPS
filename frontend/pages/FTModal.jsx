import React, { useState } from 'react';
import {
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
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
} from '@chakra-ui/react';

const FTModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nombreTorneo, setNombreTorneo] = useState('');
  const [cantidadEquipos, setCantidadEquipos] = useState('');
  const [jugadoresPorEquipo, setJugadoresPorEquipo] = useState('');
  const [duracionPartido, setDuracionPartido] = useState('');
  const [valorInscripcion, setValorInscripcion] = useState('');
  const [dia, setDia] = useState('');

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    category: "",
    date: "",
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    // o realizar validaciones.
    console.log({
      nombreTorneo,
      cantidadEquipos,
      jugadoresPorEquipo,
      duracionPartido,
      valorInscripcion,
      dia,
    });

    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>Crear Torneo</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Formulario de Torneo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Nombre del Torneo</FormLabel>
                <Input
                  value={nombreTorneo}
                  onChange={(e) => setNombreTorneo(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  ¿Que deporte quieres hacer?
                </FormLabel>
                <Select
                  id="category"
                  name="category"
                  placeholder="Elige el deporte"
                  onChange={onChange}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Cantidad de Equipos</FormLabel>
                <NumberInput max={10} min={4} step={1} value={cantidadEquipos} onChange={(value) => setCantidadEquipos(value)}>
                  <NumberInputField />
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Cantidad de Jugadores por Equipo</FormLabel>
                <NumberInput min={2} value={jugadoresPorEquipo} onChange={(value) => setJugadoresPorEquipo(value)}>
                  <NumberInputField />
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>Duración por Partido</FormLabel>
                <Input
                  value={duracionPartido}
                  onChange={(e) => setDuracionPartido(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Valor de Inscripción</FormLabel>
                <Input
                  value={valorInscripcion}
                  onChange={(e) => setValorInscripcion(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Día del Torneo</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  color={"whiteAlpha.800"}
                  placeholder="dd-mm-yy"
                  size="md"
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Guardar
            </Button>
            <Button variant="ghost" onClick={handleClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FTModal;
