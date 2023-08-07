import {
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export default function HomeLayout({ children }) {
  const router = useRouter();
  const { isAuthenticated, loading, logout } = useAuth();

  const navBg = useColorModeValue("myColor.Eminence", "myColor.Eminence");
  const linkColor = useColorModeValue("myColor.Snow", "myColor.Snow");
  const singIColor = useColorModeValue("myColor.Aqua", "myColor.Aqua");

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Box px={36} py={2} bg={navBg}>
        <Flex alignItems="center">
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
            {" "}
            <NavItems linkColor={linkColor} />
          </Box>
          <Box ml={4}>
            <Button
              bg={singIColor}
              colorScheme="myColor.Aqua"
              borderRadius={"12px"}
              _hover={{
                cursor: "pointer",
                fontSize: "xl",
              }}
              onClick={logout}
            >
              Cerrar Sesión
            </Button>
          </Box>
        </Flex>
      </Box>
      {children}
    </>
  );
}

const NavItems = ({ linkColor }) => {
  return (
    <Flex alignItems="center">
      <Link
        as={NextLink}
        href="/home"
        mr={4}
        fontWeight="medium"
        fontSize="2xl"
        color={linkColor}
        _hover={{ textDecoration: "none", color: "myColor.Aqua" }}
      >
        Home
      </Link>
    </Flex>
  );
};
