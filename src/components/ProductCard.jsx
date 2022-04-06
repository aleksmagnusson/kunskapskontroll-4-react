import React from "react";
import { Box, Button, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductCard({ product, onClick }) {
  return (
    <Grid margin={2} padding="10" xs={8} sm={4} md={3}>
      <Box>
        <Box>
          <Image
            alt={product.title}
            src={product.image}
            float="left"
            width="25%"
          />
          <Text>{product.name}</Text>
          <Text fontWeight="bold" align="center">
            {product.title}
          </Text>
          <br />
          <Stack paddingLeft="10">
            <Button
              size="sm"
              width="150px"
              onClick={onClick}
              bg="blue.400"
              color="white"
              _hover={{ bg: "blue.500" }}
            >
              Add product
            </Button>
            <Button
              size="sm"
              width="150px"
              onClick={onClick}
              as={Link}
              to={`/products/${product.id}`}
              bg="blue.400"
              color="white"
              _hover={{ bg: "blue.500" }}
            >
              See Details
            </Button>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
}

export default ProductCard;
