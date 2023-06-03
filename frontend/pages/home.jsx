import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

const Navbar = () => {
  const navBg = useColorModeValue('myColor.Eminence', 'myColor.Eminence');
  const linkColor = useColorModeValue('myColor.Snow', 'myColor.Snow');
  const singIColor = useColorModeValue('myColor.Aqua', 'myColor.Aqua');

  return (
    <Box bg={navBg} px={6} py={1}>
      <Flex alignItems="center">
        <Image src="/Sportify.png" alt="logo" width="100px" height="100px" borderRadius="full" objectFit="cover">
            
        </Image>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }}>
          <NavItems linkColor={linkColor} />
        </Box>
        <Box ml={4}>
          <Button bg={singIColor} colorScheme="myColor.Aqua">Sign In</Button>
        </Box>
      </Flex>
    </Box>
  );
};

const NavItems = ({ linkColor }) => {
  return (
    <Flex alignItems="center">
      <Link href="#" mr={4} fontWeight="medium" fontSize="md" color={linkColor} _hover={{ textDecoration: 'none', color: 'myColor.Aqua' }}>
        Servicios
      </Link>
      <Link href="#" mr={4} fontWeight="medium" fontSize="md" color={linkColor} _hover={{ textDecoration: 'none', color: 'myColor.Aqua' }}>
        Conócenos
      </Link>
      <Link href="#" mr={4} fontWeight="medium" fontSize="md" color={linkColor} _hover={{ textDecoration: 'none', color: 'myColor.Aqua' }}>
        Contacto
      </Link>
      <Link href="#" fontWeight="medium" fontSize="md" color={linkColor} _hover={{ textDecoration: 'none', color: 'myColor.Aqua' }}>
        FAQ
      </Link>
    </Flex>
  );
};

export default Navbar;
