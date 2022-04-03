import React from "react";
import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductCard({ product, onClick }) {
  return (
    <Grid margin={2} xs={8} sm={4} md={3}>
      <Box>
        <Image
          alt={product.title}
          src={product.image}
          float="left"
          width="25%"
          marginleft="50%"
        />
        <Box>
          <Text>{product.name}</Text>
          <Text>{product.category}</Text>
          <Button size="md" onClick={onClick}>
            Add product 2
          </Button>
          <Button
            size="md"
            onClick={onClick}
            as={Link}
            to={`/products/${product.id}`}
          >
            See Details 1
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default ProductCard;
