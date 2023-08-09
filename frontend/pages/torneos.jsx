
import { Box, Flex, Text, Card, Center, Wrap, ChakraProvider} from "@chakra-ui/react";
import NextLink from "next/link";
import HomeLayout from "@/components/HomeLayout";
import FTModal from './FTModal';
import ITModal from './ITModal';
import { getAll } from "@/services/categories";

export default function TorneosPage() {
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
            justifyContent="center"
            alignItems="center"
            h="100vh"
          >
  
          <Flex
            justifyContent="center"
            alignItems="center"
            width="50%"
            height="50%"
            backgroundColor={"whiteAlpha.500"}
          >

          <Wrap
           spacing="10px" justify="center" width="100%"
          >
          
            <Card
              justifyContent="center"
              width="10rem"
              height="10rem"
              padding={3}
              margin={3}
              backgroundColor={"whiteAlpha.500"}
            >
              <Center>
                <ChakraProvider>
                  <FTModal />
                </ChakraProvider>
              </Center>
              
            </Card>

            
            <Card
              justifyContent="center"
              width="10rem"
              height="10rem"
              padding={3}
              margin={3}
              backgroundColor={"whiteAlpha.500"}

            >
              <Center>
              <ChakraProvider>
                  <ITModal />
                </ChakraProvider>

              </Center>
              
            </Card>
            

            
          </Wrap>

          </Flex>
        
          
        </Flex>
            
        </Box>
      </Box>
    </HomeLayout>
  );
}
