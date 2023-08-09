import { Box, Flex, Wrap, WrapItem, Center } from "@chakra-ui/react";
import NextLink from "next/link";
import HomeLayout from "@/components/HomeLayout";
export default function MenuPage() {
  return (
    <HomeLayout>
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
                <NextLink href="/reservas">
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
                </NextLink>
                <NextLink href="/match">
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
                </NextLink>
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
                <NextLink href="/productos">
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
                </NextLink>
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
    </HomeLayout>
  );
}
