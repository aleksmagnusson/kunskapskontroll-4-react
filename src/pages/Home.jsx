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
  Image,
} from "@chakra-ui/react";

function Home() {
  return (
    <Container>
      <Flex>
        <Stack>
          <Heading paddingTop="35" direction="row">
            Welcome to ProduitStore{" "}
          </Heading>
          <Text fontStyle="italic" fontWeight="medium">
            We have a large amount of diffrent products, for good prices!
          </Text>
          <Image src="https://simonsblog.imarcom-cdn.com/webfolder_download/10c4dbf9e8cf995dad92c11483a28ae5/03-produits_1/9f6488748ec65841619a18c48ac9a12b4be528cf/03-produits_1.png" />
          <br />
          <Text fontStyle="italic" fontWeight="medium">
            Click here to see our products
          </Text>
          <Button
            border="1px"
            fontWeight="bold"
            as={Link}
            to="/products"
            padding="30"
          >
            See our products
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Home;
