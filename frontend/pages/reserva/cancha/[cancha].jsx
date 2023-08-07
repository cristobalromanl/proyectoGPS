import React from "react";

import { useRouter } from "next/router";

import { H1, H2, HStack } from "@chakra-ui/react";

const prueba = () => {
  const router = useRouter();
  const objeto = router.query;
  const deporte = objeto.deporte;
  const fecha = objeto.fecha;

  return "deporte: " + deporte + ", fecha: " + fecha;
};

export default prueba;
