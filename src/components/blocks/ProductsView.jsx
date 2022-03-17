import react from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

function ProductsView({ products }) {
  console.log({ products });
  return (
    <Box minHeight="50vh">
      <Stack spacing="25px">
        {products.map((product) => (
          <SimpleGrid key={product.id} columns={2}>
            <Image
              width="auto"
              height="auto"
              marginLeft="auto"
              marginRight="auto"
              src={product.image}
            />
            <Box>
              <Heading fontSize="larger">{product.title}</Heading>
              <Text fontStyle="italic">{product.description}</Text>
              <Text fontWeight="bold">{product.price} $</Text>
              <Text fontWeight="medium">{product.category}</Text>
              <Text fontWeight="bold">
                {" "}
                Rating: {product.rating.rate} of {product.rating.count} ratings.
              </Text>
              <br />
              <Button as={Link} to={`/products/${product.id}`}>
                See More
              </Button>
              <Button as={Link} to={`/cart/${product.id}`}>
                Add product
              </Button>
            </Box>
          </SimpleGrid>
        ))}
      </Stack>
    </Box>
  );
}

export default ProductsView;
