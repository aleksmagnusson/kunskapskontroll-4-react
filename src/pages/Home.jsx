import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";

function Home() {
  return (
    <Container>
      <Flex>
        <Stack>
          <Image />
          <Heading>Welcome to ProduitStore</Heading>
          <Text>
            We have a large amount of diffrent products, for good prices!
          </Text>
          <Text>Click here to see our products</Text>
          <Button>See our products</Button>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Home;
