import { Box, Flex, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAll } from "@/services/reservations";
import HomeLayout from "@/components/HomeLayout";

export default function ReservasPage() {
  const toast = useToast();
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getAll()
      .then((reservas) => setReservas(reservas))
      .finally(() => setCargando(false))
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
      <Box
        fontFamily="Inter"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box
          width="100%"
          backgroundImage={
            " linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.40)), url(./background.png)"
          }
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundColor="rgba(0, 0, 0, 0.25)"
          sx={{
            "@media screen and (max-width: 855px)": {
              pt: "20px",
              width: "900px!important",
              height: "1200px",
            },
          }}
        >
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            h="100vh"
          >
            <Box bg="white">
              {cargando ? "cargando..." : JSON.stringify(reservas)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </HomeLayout>
  );
}
