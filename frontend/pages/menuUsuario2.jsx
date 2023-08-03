import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Button,
  Link,
  Wrap,
  WrapItem,
  Center,
  VStack,
  Container,
} from "@chakra-ui/react";

const navbarUsr = () => {
  return (
    <Box>
      <Box
        position="relative"
        bg="myColor.Eminence"
        px={20}
        py={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Flex alignItems="center" width="100%">
          <Image
            src="/Sportify.png"
            alt="logo"
            width="100px"
            height="100px"
            borderRadius="full"
            objectFit="cover"
          ></Image>
          <Spacer />
          <Box display={{ base: "none", md: "flex" }}>
            <NavItems linkColor="myColor.Snow" />
          </Box>
          <Box ml={4}>
            <Button
              bg="myColor.Aqua"
              color="myColor.Snow"
              borderRadius={"12px"}
            >
              Cerrar Sesión
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
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
            <Wrap spacing="10px" justify="center" width="100%">
              <Wrap spacing="10px" direction="column">
                <WrapItem>
                  <Center
                    bg={`url("./Reserva.png")`}
                    backgroundSize="cover"
                    borderRadius={3}
                    w={615}
                    h={210}
                    _hover={{
                      border: "2px solid #05f3ff",
                      cursor: "pointer",
                      opacity: 0.95,
                    }}
                  ></Center>
                </WrapItem>
                <WrapItem>
                  <Center
                    bg={`url("./Match.png")`}
                    backgroundSize="cover"
                    borderRadius={3}
                    w={615}
                    h={210}
                    _hover={{
                      border: "2px solid #05f3ff",
                      cursor: "pointer",
                      opacity: 0.95,
                    }}
                  ></Center>
                </WrapItem>
              </Wrap>
              <WrapItem>
                <Center
                  bg={`url("./Torneos.png")`}
                  backgroundSize="cover"
                  borderRadius={3}
                  w={532}
                  h={430}
                  _hover={{
                    border: "2px solid #05f3ff",
                    cursor: "pointer",
                    opacity: 0.95,
                  }}
                  sx={{
                    "@media screen and (max-width: 855px)": {
                      width: "610px!important",
                      height: "300px",
                    },
                  }}
                ></Center>
              </WrapItem>

              <Wrap spacing="10px" justify="center">
                <WrapItem>
                  <Center
                    bg={`url("./Insumos.png")`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderRadius={3}
                    w={300}
                    h={202}
                    _hover={{
                      border: "2px solid #05f3ff",
                      cursor: "pointer",
                      opacity: 0.95,
                    }}
                    sx={{
                      "@media screen and (max-width: 455px)": {
                        width: "410px!important",
                      },
                    }}
                  ></Center>
                </WrapItem>

                <WrapItem>
                  <Center
                    bg={`url("./Clubes.png")`}
                    backgroundSize="cover"
                    borderRadius={3}
                    w={300}
                    h={202}
                    _hover={{
                      border: "2px solid #05f3ff",
                      cursor: "pointer",
                      opacity: 0.95,
                    }}
                    sx={{
                      "@media screen and (max-width: 455px)": {
                        width: "410px!important",
                        height: "130px",
                      },
                      backgroundPosition: "center",
                    }}
                  ></Center>
                </WrapItem>
                <WrapItem>
                  <Center
                    bg={`url("./Eventos.png")`}
                    backgroundSize="cover"
                    borderRadius={3}
                    w={532}
                    h={202}
                    _hover={{
                      border: "2px solid #05f3ff",
                      cursor: "pointer",
                      opacity: 0.95,
                    }}
                    sx={{
                      "@media screen and (max-width: 855px)": {
                        width: "610px!important",
                        height: "202px",
                      },
                    }}
                  ></Center>
                </WrapItem>
              </Wrap>
            </Wrap>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
const NavItems = ({ linkColor }) => {
  return (
    <Flex alignItems="center">
      <Link
        href="#"
        mr={4}
        fontWeight="medium"
        fontSize="2xl"
        color={linkColor}
        _hover={{ textDecoration: "none", color: "myColor.Aqua" }}
      >
        Usuario{" "}
      </Link>
    </Flex>
  );
};

export default navbarUsr;
