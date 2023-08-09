import {
  chakra,
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";

const ImageGallery = () => {
  const images = [
    "/logosequipos/team1.png",
    "/logosequipos/team2.png",
    "/logosequipos/team3.png",
    "/logosequipos/team4.png",
    "/logosequipos/team5.png",
    "/logosequipos/team6.png",
    // Add more image URLs
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={3} spacing={4} rows={2}>
        {images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            borderRadius="md"
            boxShadow="md"
            boxSize="200px"
            objectFit="cover"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageGallery;
