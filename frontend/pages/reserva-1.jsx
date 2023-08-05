import {
  Box,
  Flex,
  Text,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  HStack,
  VStack,
  Icon,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

export default function Reserva_1() {
  const h_header = "7rem";
  const h_footer = "3.5rem";
  const margin = "1rem";
  const padding = "1rem";

  return (
    <Box h="100vh" bg="gray.200">
      <Flex h="100%">
        <Box h="100%" w="100%">
          <Flex h={h_header}>
            <Flex
              h={`calc(100% - ${margin} - ${margin})`}
              w="100%"
              mx={margin}
              my={margin}
              px={padding}
              py={padding}
              borderRadius="2xl"
              bg="white"
              alignItems="center"
            >
              <Spacer />
              <Flex alignItems="center">
                <Menu isLazy>
                  <MenuButton>
                    <HStack>
                      <Icon
                        color="#5D3C81"
                        mr="2"
                        fontSize="30"
                        as={FaUserCircle}
                      />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="0px"
                        ml="2"
                      >
                        <Text fontSize="sm">Nombre Apellido</Text>
                        <Text fontSize="xs">Usuario</Text>
                      </VStack>
                    </HStack>
                  </MenuButton>
                  <MenuList></MenuList>
                </Menu>
              </Flex>
            </Flex>
          </Flex>
          <Flex minH={`calc(100% - ${h_header} - ${h_footer})`}>
            <Flex
              mx={margin}
              my={margin}
              px={padding}
              py={padding}
              borderRadius="2xl"
              bg="white"
              w="100%"
            >
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                  Fecha
                </FormLabel>
                <Input
                  id="date"
                  type="datetime-local"
                  borderRadius="15px"
                  fontSize="sm"
                  size="lg"
                  required
                />
              </FormControl>
            </Flex>
          </Flex>
          <Box h={h_footer} px={padding} py={padding}></Box>
        </Box>
      </Flex>
    </Box>
  );
}
