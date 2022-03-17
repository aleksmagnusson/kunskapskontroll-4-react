import React from "react";
import { Link } from "react-router-dom";
import { Container, Heading, Stack, Flex } from "@chakra-ui/react";
import { ProductsView } from "./../components/blocks/ProductsView";
import { productsState } from "../components/recoil/products/ProductsAtom";
import { useRecoilValue } from "recoil";

function Products() {
  const ProductsView = useRecoilValue(productsState);

  return (
    <Container>
      <Flex>
        <Stack>
          <Heading>ProduitStore's Products</Heading>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Products;
