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

const ITModal = () => {
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
      <Button onClick={handleOpen}>Inscripción</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inscripción en Torneo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
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
             
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Buscar
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

export default ITModal;
