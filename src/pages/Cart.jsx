import React from "react";
import useCart from "../hooks/useCart";
import productsState from "../stores/products/atom";
import { useRecoilValue } from "recoil";
import { Container, Grid, Text, Box, Image, Button } from "@chakra-ui/react";

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
        <Container padding={2}>
          <Grid key={product.id} justifyItems="center" alignItems="center">
            <Image
              display="block"
              objectFit="contain"
              height="80px"
              width="80px"
              src={product.image}
              alt={product.title}
            />
          </Grid>
          <Box>
            <Text border="1px" textAlign="center" fontWeight="bold">
              {" "}
              {product.title} {product.price} $
            </Text>
            <Button
              size="sm"
              border="1px"
              onClick={() => cart.setItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Text>{quantity}</Text>
            <Button
              size="sm"
              border="1px"
              onClick={() => cart.setItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </Button>
            <Button
              marginLeft="5"
              border="1px"
              onClick={() => cart.setItemQuantity(item.id, 0)}
            >
              Remove
            </Button>
          </Box>
        </Container>
      </div>
    );
  }

  return (
    <Box border="1px">
      <Grid textAlign="center">
        <Text fontSize="25px" textAlign="center" fontWeight="bold">
          Your Cart
        </Text>
        {cart.items.map(getProduct)}
        <Text>Total: {getTotal().toFixed(2)}$</Text>
      </Grid>
    </Box>
  );
}

export default Cart;
