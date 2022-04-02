import React from "react";
// Importerar "useRecoilState, useRecoilValue och useSetRecoilState" från recoil.
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import productsState from "../stores/products/atom";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import {
  Container,
  Stack,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

function Cart() {
  // cart och setCart hämtas från min atom i cart-mappen.
  const products = useRecoilValue(productsState);
  const cart = useCart();

  function 
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems, totalPrice } = useRecoilValue(cartStatus);
  const removeItem = useSetRecoilState(removeItemSelector);

  return (
    <Container>
      <Flex>
        <Stack>
          <Text fontSize="25px" textAlign="center" fontWeight="bold">
            Your Cart
          </Text>
          {cart.map((product, index) => (
            <Box key={product.id}>
              <Image
                float="left"
                width="25%"
                marginleft="50%"
                src={product.image}
                alt={product.title}
              />
              <div className="product-info">
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  paddingTop="45"
                  paddingBottom="5"
                >
                  {product.title} {product.price} ${" "}
                </Text>
                <Button
                  border="1px"
                  fontWeight="bold"
                  className="cart-button"
                  left="50%"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </Button>
              </div>
            </Box>
          ))}
          <Text fontSize="larger" fontWeight="bold" textAlign="center">
            Amount of products: {totalItems}
          </Text>
          <Text fontSize="larger" fontWeight="bold" textAlign="center">
            Total: $ {totalPrice}
          </Text>
          <Button border="1px" fontWeight="bold" as={Link} to="/products">
            {" "}
            Continue Shopping{" "}
          </Button>
          <Button
            border="1px"
            fontWeight="bold"
            className="cart-button"
            disabled
          >
            Checkout
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Cart;
