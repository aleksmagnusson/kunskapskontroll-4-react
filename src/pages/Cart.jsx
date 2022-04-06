import React from "react";
import useCart from "../hooks/useCart";
import productsState from "../stores/products/atom";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  Container,
  Grid,
  Text,
  Box,
  Image,
  Button,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

function Cart() {
  const cart = useCart();
  const products = useRecoilValue(productsState);

  function getTotal() {
    // “.reduce((acc, current) => ({ ...acc, [current]: 0 }), {})”
    return cart.items.reduce((acc, current) => {
      const product = products.find((p) => p.id === current.id);
      return acc + product.price * current.quantity;
    }, 0);
  }

  function getProduct(item) {
    const product = products.find((p) => p.id === item.id);
    const quantity = item.quantity;

    return (
      <div key={item.id}>
        <Container padding={4}>
          <Stack direction={["column", "row"]} spacing="10px">
            <HStack spacing="10">
              <Box key={product.id} justifyItems="center" alignItems="center">
                <Image
                  display="block"
                  objectFit="contain"
                  height="100px"
                  width="100px"
                  src={product.image}
                  alt={product.title}
                />
              </Box>
              <Text textAlign="center" fontWeight="bold">
                {" "}
                {product.title}
              </Text>
              <Text textAlign="center" fontWeight="bold">
                {" "}
                $ {product.price}:-
              </Text>
            </HStack>
          </Stack>
          <Stack display="flex" justifyContent="center">
            <HStack spacing="12px" marginTop="10px">
              <Button
                bg="blue.400"
                color="white"
                size="sm"
                _hover={{ bg: "blue.500" }}
                onClick={() =>
                  cart.setItemQuantity(product.id, item.quantity - 1)
                }
              >
                -
              </Button>
              <Text>{quantity}</Text>
              <Button
                bg="blue.400"
                color="white"
                size="sm"
                _hover={{ bg: "blue.500" }}
                onClick={() =>
                  cart.setItemQuantity(product.id, item.quantity + 1)
                }
              >
                +
              </Button>
              <Button
                bg="blue.400"
                color="white"
                size="sm"
                marginLeft="15"
                _hover={{ bg: "red.500" }}
                onClick={() => cart.setItemQuantity(item.id, 0)}
              >
                Remove
              </Button>
            </HStack>
          </Stack>
        </Container>
      </div>
    );
  }

  return (
    <Box>
      <Text fontSize="25px" textAlign="center" fontWeight="bold">
        Your Cart
      </Text>
      {cart.items.map(getProduct)}
      <Grid textAlign="center"></Grid>
      <Text textAlign="center" fontWeight="bold">
        Total: $ {getTotal().toFixed(2)}:-
      </Text>
      <Container>
        <HStack spacing="12px" display="flex" justifyContent="center">
          <Button
            bg="blue.400"
            color="white"
            size="md"
            _hover={{ bg: "blue.500" }}
            as={Link}
            to="/products"
          >
            Continue Shopping
          </Button>
          <Button
            bg="blue.500"
            color="white"
            size="md"
            _hover={{ bg: "blue.100" }}
            disabled
          >
            Checkout
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}

export default Cart;
