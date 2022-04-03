import React from "react";
// Lägg till mer CSS via Chakra.
import { Grid, Box, Text, Button, Image } from "@chakra-ui/react";

function SingleProductCard({ product, onClick }) {
  return (
    <Grid margin={2} xs={8} sm={4} md={3}>
      <Box>
        <Image
          float="left"
          width="25%"
          marginleft="50%"
          src={product.image}
          alt={product.title}
        />
        <Box>
          <Text>{product.name}</Text>
          <Text>{product.description}</Text>
          <Button onClick={onClick}>Add product 1</Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default SingleProductCard;
