import react, { useState } from "react";
import { Link } from "react-router-dom";
// CSS från Chakra UI
import {
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

// Importera atomer och "states" från recoil.
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../recoil/cart/atom";
import { productsState } from "../recoil/products/productsAtom";

// Importerar från "product"/"cart" med recoil.
function Products() {
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);

  // Importerar från "Carts" atom/selektor
  function handleAdd(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <Box minHeight="60vh">
      <Stack spacing="50px">
        {products.map((product) => (
          <SimpleGrid key={product.id} columns={2} gridColumn="2">
            <Image
              width="auto"
              height="auto"
              paddingBlock="25"
              paddingRight="50"
              src={product.image}
            />
            <Box>
              <Heading fontSize="larger">{product.title}</Heading>
              <Text fontWeight="bold">{product.price} $</Text>
              <Text fontStyle="italic">{product.description}</Text>
              <Text fontWeight="medium">{product.category}</Text>
              <Text fontWeight="bold">
                {" "}
                Rating: {product.rating.rate} of {product.rating.count} ratings.
              </Text>
              <br />
              <Button as={Link} to={`/products/${product.id}`}>
                See More
              </Button>
              <Button key={product.id} onClick={() => handleAdd(product)}>
                {" "}
                Add Product{" "}
              </Button>
            </Box>
          </SimpleGrid>
        ))}
      </Stack>
    </Box>
  );
}
export default Products;
