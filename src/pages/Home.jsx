import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";

function Home() {
  return (
    <Container>
      <Flex>
        <Stack>
          <Heading paddingTop="35" direction="row">
            Welcome to ProduitStore{" "}
          </Heading>
          <br />
          <Text>
            We have a large amount of diffrent products, for good prices!
          </Text>
          <Text>Click here to see our products</Text>
          <br />
          <AspectRatio maxW="560px" ratio={16 / 9}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zx2UL5pXUow?start=42?"
              title="Shopping"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          <br />
          <Button as={Link} to="/products" padding="30">
            See our products
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Home;
