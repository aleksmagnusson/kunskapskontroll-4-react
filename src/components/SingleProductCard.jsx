import React from "react";
// Lägg till mer CSS via Chakra.
import { Flex, Box, Text, Button, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SingleProductCard({ product, onClick }) {
  return (
    <Flex>
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        pt={2}
      >
        <Image width="15%" src={product.image} alt={product.title} />
        <Box>
          <Text
            paddingTop="3"
            fontWeight="bold"
            fontSize="2x1"
            textAlign="center"
          >
            {product.title}
          </Text>
          <Text
            fontStyle="italic"
            fontWeight="semibold"
            maxWidth="500px"
            marginLeft="15"
            paddingTop="3"
          >
            {product.description}
          </Text>
          <Text
            paddingTop="3"
            fontStyle="italic"
            color="red"
            fontWeight="medium"
          >
            Price: $ {product.price}:-
          </Text>
          <Text paddingTop="3" fontWeight="semibold">
            {" "}
            Category: {product.category}
          </Text>

          <Button
            onClick={onClick}
            bg="blue.400"
            color="white"
            _hover={{ bg: "blue.500" }}
            marginTop="25"
          >
            Add product
          </Button>
          <Button
            bg="blue.400"
            color="white"
            marginTop="25"
            marginLeft="10"
            _hover={{ bg: "blue.500" }}
            as={Link}
            to="/products"
          >
            {" "}
            Go back{" "}
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SingleProductCard;
