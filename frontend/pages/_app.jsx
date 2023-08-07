import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import Fonts from "@/styles/fonts";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
