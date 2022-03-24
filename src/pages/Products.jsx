import React, { useState } from "react";
import ProductsBlock from "../Products";
import { Container, Heading, Stack, Flex } from "@chakra-ui/react";

function Products() {
  return (
    <Container>
      <Flex>
        <Stack>
          <Heading paddingBottom="50" paddingTop="50">
            ProduitStore's Products
          </Heading>
          <ProductsBlock />
        </Stack>
      </Flex>
    </Container>
  );
}

export default Products;
