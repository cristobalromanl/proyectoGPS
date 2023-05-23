import {
  Box,
  Flex,
  Link,
  Text,
  Divider,
  Stack,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  HStack,
  VStack,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaUserCircle, FaFlag, FaTableTennis } from "react-icons/fa";

export default function Dashboard_1() {
  const h_header = "7rem";
  const w_sidebar = "16rem";
  const h_footer = "3.5rem";
  const margin = "1rem";
  const padding = "1rem";

  return (
    <Box h="100vh">
      <Flex h="100%" bg="gray.200">
        <Box h="100%" w={w_sidebar}>
          <Box
            h={`calc(100% - ${margin} - ${margin})`}
            mx={margin}
            my={margin}
            px={padding}
            py={padding}
            borderRadius="2xl"
            bg="#5D3C81"
          >
            <Box>
              <Link
                href="/dashboard-1"
                target="_blank"
                display="flex"
                lineHeight="100%"
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                fontSize="11px"
                mb="10px"
                _hover={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
              >
                <Image src="/logo.png" boxSize="55px" alt="LOGO" />
              </Link>
              <Divider />
            </Box>
            <Stack direction="column" mb="40px">
              <Box>
                <Text
                  color="white"
                  fontWeight="bold"
                  mb={{ xl: "12px" }}
                  mx="auto"
                  ps={{ sm: "10px", xl: "16px" }}
                  py="12px"
                >
                  ADMINISTRACIÓN
                </Text>

                <Button
                  leftIcon={<FaFlag color="white" />}
                  boxSize="initial"
                  justifyContent="flex-start"
                  alignItems="center"
                  bg="transparent"
                  mb={{ xl: "12px" }}
                  mx={{ xl: "auto" }}
                  py="12px"
                  ps={{ sm: "10px", xl: "16px" }}
                  borderRadius="15px"
                  _hover={{
                    boxShadow: "none",
                    bg: "purple.600",
                  }}
                  w="100%"
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "transparent",
                  }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Text my="auto" fontSize="sm" color="purple.200">
                    CANCHAS
                  </Text>
                </Button>

                <Button
                  leftIcon={<FaTableTennis color="white" />}
                  boxSize="initial"
                  justifyContent="flex-start"
                  alignItems="center"
                  bg="transparent"
                  mb={{ xl: "12px" }}
                  mx={{ xl: "auto" }}
                  py="12px"
                  ps={{ sm: "10px", xl: "16px" }}
                  borderRadius="15px"
                  _hover={{
                    boxShadow: "none",
                    bg: "purple.600",
                  }}
                  w="100%"
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "transparent",
                  }}
                  _focus={{ boxShadow: "none" }}
                >
                  <Text my="auto" fontSize="sm" color="purple.200">
                    INDUMENTARIAS
                  </Text>
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box h="100%" w={`calc(100% - ${w_sidebar})`}>
          <Flex h={h_header}>
            <Flex
              h={`calc(100% - ${margin} - ${margin})`}
              w="100%"
              mr={margin}
              my={margin}
              px={padding}
              py={padding}
              borderRadius="2xl"
              bg="#5D3C81"
              alignItems="center"
            >
              <Spacer />
              <Flex alignItems="center">
                <Menu isLazy>
                  <MenuButton>
                    <HStack>
                      <Icon
                        color="white"
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
                        <Text fontSize="sm" color="white">Nombre Apellido</Text>
                        <Text fontSize="xs" color="purple.200">Administrador</Text>
                      </VStack>
                    </HStack>
                  </MenuButton>
                  <MenuList></MenuList>
                </Menu>
              </Flex>
            </Flex>
          </Flex>
          <Box
            minH={`calc(100% - ${h_header} - ${h_footer})`}
            px={padding}
            py={padding}
          ></Box>
          <Box h={h_footer} px={padding} py={padding}></Box>
        </Box>
      </Flex>
    </Box>
  );
}
