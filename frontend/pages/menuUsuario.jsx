import {
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  useColorModeValue,
  Link,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MenuPage() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

const navbarUsr = () => {

  return (
    <Box>
        <Box position="relative" bg="myColor.Eminence" px={6} >
            <Flex alignItems="center">
                <Image src="/Sportify.png" alt="logo" width="100px" height="100px" borderRadius="full" objectFit="cover">
                </Image>
                <Spacer />
                <Box display={{ base: 'none', md: 'flex' }}>
                    <NavItems linkColor="myColor.Snow" />
                </Box>
                <Box ml={4}>
                    <Button bg="myColor.Aqua" color="myColor.Snow">Cerrar Sesión</Button>
                </Box>
            </Flex>
        </Box>
        <Box position="relative" my={10} display="flex" justifyContent="center" alignItems="center" width="100vw">
            <Box borderRadius="md" width="90%">
                <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
                    <Wrap spacing='10px' justify='center'>
                        <Wrap spacing='10px' direction="column">
                            <WrapItem >
                                <Center bg={`url("./Reserva.png")`} backgroundSize="cover" borderRadius={3}
                                w={410} h={140} _hover={{border:"2px solid #05f3ff", cursor:"pointer"}}>

                                </Center>
                            </WrapItem>
                            <WrapItem>
                                <Center bg={`url("./Match.png")`} backgroundSize="cover" borderRadius={3}
                                w={410} h={140} _hover={{border:"2px solid #05f3ff", cursor:"pointer"}}>
                                    
                                </Center>
                            </WrapItem>
                        </Wrap>
                      <WrapItem >
                        <Center bg={`url("./Torneos.png")`} backgroundSize="cover" borderRadius={3}
                        w={355} h={290} _hover={{border:"2px solid #05f3ff", cursor:"pointer"}}
                        sx={{"@media screen and (max-width: 855px)": {width: "410px!important", height: "300px"},}}>
                          
                        </Center>
                      </WrapItem>

                      <Wrap spacing='10px' justify='center' >
                        <WrapItem >
                          <Center bg={`url("./Insumos.png")`} backgroundSize="cover" backgroundPosition="center" borderRadius={3}
                          w={200} h={135} _hover={{border:"2px solid #05f3ff", cursor:"pointer"}}
                          sx={{"@media screen and (max-width: 455px)": {width: "410px!important"},}}>
                          </Center>
                        </WrapItem>
                        
                        <WrapItem >
                            <Center bg={`url("./Clubes.png")`} backgroundSize="cover"  borderRadius={3}
                            w={200} h={135} _hover={{border:"2px solid #05f3ff", cursor:"pointer"}}
                            sx={{"@media screen and (max-width: 455px)": {width: "410px!important", height: "130px"},
                            backgroundPosition: "center"}}>
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center bg={`url("./Eventos.png")`} backgroundSize="cover"  borderRadius={3}
                            w={355} h={135} _hover={{border:"2px solid #05f3ff", cursor:"pointer"}}
                            sx={{"@media screen and (max-width: 855px)": {width: "410px!important", height: "140px"},}}>
                            </Center>
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
}
