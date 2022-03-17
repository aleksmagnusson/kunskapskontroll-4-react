import React from "react";
import { Link } from "react-router-dom";
import { Container, Heading, Stack, Flex, Box } from "@chakra-ui/react";

function Cart() {
  return (
    <Container>
      <Flex>
        <Stack>
          <Heading>Cart</Heading>
          <Flex>
            <Box></Box>
            <Box></Box>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Cart;
