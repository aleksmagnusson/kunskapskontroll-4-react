// useRecoilValue används när man vill returnera ett värde som är givet till Recoil state.
import { useRecoilValue, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
// Hämtar in ProductsAtom från productsState.

import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { cartState } from "../components/recoil/cart/atom";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { productsState } from "../components/recoil/products/productsAtom";

function ProductDetail() {
  const params = useParams();
  const products = useRecoilValue(productsState);
  // "useRecoilValue" hämtar "productsState" från "ProductsAtom.js"
  const [cart, setCart] = useRecoilState(cartState);

  // Importerar från "Carts" atom/selektor
  function handleAdd(product) {
    const newCart = {
      id: Math.floor(Math.random() * 10000),
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count,
      },
    };

    setCart((prevCart) => {
      return [...prevCart, newCart];
    });
  }

  // Hämta enskild produkt från Products till "ProductDetail".
  const product = products.find(
    (product) => product.id === parseInt(params.productId, 10)
  );

  return (
    <Box minHeight="60vh">
      <Stack spacing="50px">
        <SimpleGrid columns={2} gridColumn="2">
          <Box key={product.id} margin="auto">
            <Image
              display="block"
              marginLeft="auto"
              marginRight="auto"
              width="25%"
              src={product.image}
            />
            <Heading fontSize="larger" textAlign="center">
              {product.title}
            </Heading>
            <Text fontWeight="bold" textAlign="center">
              $ {product.price}
            </Text>
            <Text fontStyle="italic" textAlign="center">
              {product.description}
            </Text>
            <Text fontWeight="medium" textAlign="center">
              {product.category}
            </Text>
            <Text fontWeight="bold" textAlign="center" left="50%">
              {" "}
              Rating: {product.rating.rate} of 5. Total of{" "}
              {product.rating.count} votes.
            </Text>
            <br />
            <Button
              border="1px"
              fontWeight="bold"
              marginRight="25"
              left="50%"
              as={Link}
              to="/products"
            >
              Go back
            </Button>
            <Button
              border="1px"
              fontWeight="bold"
              left="50%"
              key={product.id}
              onClick={() => handleAdd(product)}
            >
              {" "}
              Add product{" "}
            </Button>
          </Box>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}

export default ProductDetail;
