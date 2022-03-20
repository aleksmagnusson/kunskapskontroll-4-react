// useRecoilValue används när man vill returnera ett värde som är givet till Recoil state.
import { useRecoilValue, useRecoilState } from "recoil";
// Hämtar in ProductsAtom från productsState.
import { productsState } from "../components/recoil/products/productsAtom";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { cartState } from "../components/recoil/cart/atom";
import { useParams } from "react-router-dom";
import React, { useState } from "react";

function ProductDetail() {
  const params = useParams();
  const products = useRecoilValue(productsState);
  // "useRecoilValue" hämtar "productsState" från "ProductsAtom.js"
  const [cart, setCart] = useRecoilState(cartState);

  // const ProductDetail = product.filter((product) => product.id === id);
  // productId = id;

  // Hämta enskild produkt från Products till "ProductDetail".
  const product = products.find(
    (product) => product.id === params.productId[0]
  );

  return (
    <Box key={product.id}>
      <Heading fontSize="larger">{product.title}</Heading>
      <Text fontWeight="bold">{product.price} $</Text>
      <Text fontStyle="italic">{product.description}</Text>
      <Text fontWeight="medium">{product.category}</Text>
      <Text fontWeight="bold">
        {" "}
        Rating: {product.rating.rate} of {product.rating.count} ratings.
      </Text>
      <br />
      <Button key={product.id} onClick={() => handleAdd(product)}>
        {" "}
        Add product{" "}
      </Button>
    </Box>
  );
}

export default ProductDetail;
