import React from "react";
import useCart from "../hooks/useCart";
import { Heading, Stack, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { productsState } from "../productsAtom";
import ProductCard from "../components/ProductCard";

function Products() {
  const products = useRecoilValue(productsState);
  const cart = useCart();

  return (
    <Box
      maxW="7x1"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Flex>
        <Stack>
          <Heading paddingBottom="50" paddingTop="50">
            ProduitStore's Products
          </Heading>
          <SimpleGrid columns={2} gridColumn="2">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => cart.addItem(product.id)}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Products;
