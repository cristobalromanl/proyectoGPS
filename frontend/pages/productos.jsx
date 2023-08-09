import React, { useState, useEffect } from "react";
import {
  Button,
  Heading,
  VStack,
  HStack,
  Box,
  List,
  Select,
  ListItem,
  Text,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { getAll } from "@/services/categories";
import HomeLayout from "@/components/HomeLayout";
import { getEquipments, updateEquipment } from "@/services/equipments";

export default function ReservasPage() {
  const toast = useToast();
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [stock, setstock] = useState([]);

  const [values, setValues] = useState({
    category: "",
    date: "",
  });

  useEffect(() => {
    getEquipments()
      .then((insumos) => {
        setProductos(insumos);
        setstock(insumos);
      })
      .catch((_error) =>
        toast({
          title: "Error al obtener los productos. Intentelo más tarde.",
          status: "error",
          isClosable: true,
        })
      );

    getAll()
      .then((categorias) => setCategories(categorias))
      .catch((_error) =>
        toast({
          title: "Categoría seleccionada no existe.",
          status: "error",
          isClosable: true,
        })
      );
  }, []);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.name === "category"
          ? parseInt(e.target.value)
          : e.target.value,
    });
  };

  const handleAñadirCarrito = (producto) => {
    const existingProductos = cart.find((item) => item.id === producto.id);
    if (existingProductos) {
      if (existingProductos.quantity < producto.quantity) {
        //matriz de productos modificados
        const updatedCart = cart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        //Actualizar el estado del carrito
        setCart(updatedCart);
        toast({
          title: `${producto.name} agregado al carrito.`,
          status: "success",
          isClosable: true,
        });
      } else {
        toast({
          title: `No hay suficiente stock de ${producto.name}.`,
          status: "warning",
          isClosable: true,
        });
      }
    } else {
      setCart([...cart, { ...producto, quantity: 1 }]);
      toast({
        title: `${producto.name} agregado al carrito.`,
        status: "success",
        isClosable: true,
      });
    }
  };

  const handleRemoveFromCart = (productos) => {
    const existingProductos = cart.find((item) => item.id === productos.id);

    if (existingProductos) {
      if (existingProductos.quantity === 1) {
        const updatedCart = cart.filter((item) => item.id !== productos.id);
        setCart(updatedCart);
      } else {
        existingProductos.quantity -= 1;
        setCart([...cart]);
      }

      toast({
        title: `${productos.name} eliminado del carrito.`,
        status: "warning",
        isClosable: true,
      });
    }
  };

  const handleComprar = async () => {
    try {
      for (const producto of cart) {
        const stockItem = stock.find((item) => item.id === producto.id);
        const newStock = stockItem.quantity - producto.quantity;

        // Nuevo stock para la base de datos
        await updateEquipment(producto.id, newStock);
      }

      setCart([]);

      const updatedProductos = await getEquipments();

      // Actualiza datos de stock producots
      setProductos(updatedProductos);

      // valores nuevos stock
      const updatedStock = stock.map((item) => {
        const cartItem = cart.find((producto) => producto.id === item.id);
        if (cartItem) {
          return { ...item, quantity: item.quantity - cartItem.quantity };
        }
        return item;
      });
      setstock(updatedStock);

      alert("Compra exitosa");
    } catch (error) {
      toast({
        title: "Error al realizar la compra. Inténtelo de nuevo.",
        status: "error",
        isClosable: true,
      });
    }
  };

  //productos xfilas
  const productosInRows = [];
  for (let i = 0; i < productos.length; i += 4) {
    productosInRows.push(productos.slice(i, i + 4));
  }
  //  total del carrito
  const cartTotal = cart.reduce((total, productos) => {
    return total + productos.price * productos.quantity;
  }, 0);

  return (
    <HomeLayout>
      <Box
        m="0"
        p="0"
        bgImg="/fondoCancha.jpeg"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        width="100%"
        minHeight="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack align="flex-start" spacing="15px" maxW="80%" h="60vh">
          <Select
            id="category"
            name="category"
            variant="filled"
            placeholder="Todos"
            onChange={onChange}
          >
            {" "}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
          <Heading color="whiteAlpha.900" fontWeight="bold">
            Productos e insumos
          </Heading>
          {productosInRows.map((row) => (
            <HStack spacing="15px" my="15px" flex="1" justify="center">
              {row
                .filter((productos) => {
                  if (!values.category) {
                    return true; // Mostrar todos los productos
                  }
                  return productos.categoryId === values.category; // Filtrar por la categoría seleccionada
                })
                .map((productos) => (
                  <Box
                    key={productos.id}
                    backgroundColor="white"
                    p="15px"
                    rounded="md"
                    shadow="md"
                    width="250px"
                  >
                    <VStack>
                      <Heading size="md">
                        {productos.name.charAt(0).toUpperCase() +
                          productos.name.slice(1)}
                      </Heading>
                      <Text>Precio: ${productos.price}</Text>
                      <Text>Stock: {productos.quantity}</Text>
                      <Button
                        colorScheme="teal"
                        onClick={() => handleAñadirCarrito(productos)}
                      >
                        Agregar al carrito
                      </Button>
                    </VStack>
                  </Box>
                ))}
            </HStack>
          ))}
          <Box
            backgroundColor="blackAlpha.100"
            p="15px"
            rounded="md"
            shadow="md"
          >
            <VStack align="start">
              <HStack>
                <Icon as={FiShoppingCart} boxSize={6} color="whiteAlpha.800" />
                <Heading color="whiteAlpha.800" fontWeight="bold">
                  CARRITO DE COMPRAS
                </Heading>
              </HStack>
              <List>
                {cart.map((productos) => (
                  <ListItem key={productos.id} p={3} my={2} rounded="md">
                    <HStack justifyContent="space-between">
                      <Box
                        key={productos.id}
                        p="15px"
                        rounded="md"
                        shadow="md"
                        width="250px"
                      >
                        <Text color="#FFFFFF">
                          {productos.name.charAt(0).toUpperCase() +
                            productos.name.slice(1)}{" "}
                          - ${productos.price} x {productos.quantity} Stock
                          restante:{" "}
                          {stock.find((item) => item.id === productos.id)
                            .quantity - productos.quantity}
                        </Text>
                        <Button
                          colorScheme="red"
                          size="sm"
                          onClick={() => handleRemoveFromCart(productos)}
                        >
                          Eliminar
                        </Button>
                      </Box>
                    </HStack>
                  </ListItem>
                ))}
                <ListItem backgroundColor="white" p={3} my={2} rounded="md">
                  <HStack justifyContent="space-between">
                    <Text fontWeight="bold">Total:</Text>
                    <Text>${cartTotal.toFixed(2)}</Text>
                  </HStack>
                </ListItem>
                <Button
                  colorScheme="green"
                  size="sm"
                  onClick={async () => {
                    await handleComprar();

                    toast({
                      title: "Compra exitosa.",
                      status: "success",
                      isClosable: true,
                    });
                  }}
                >
                  Comprar
                </Button>
              </List>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </HomeLayout>
  );
}
