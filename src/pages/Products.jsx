import React, { useState } from "react";
import ProductsBlock from "../components/blocks/Products";
import { Container, Heading, Stack, Flex } from "@chakra-ui/react";
import { productsState } from "../components/recoil/products/productsAtom";
import { useRecoilValue } from "recoil";

function Products() {
  const products = useRecoilValue(productsState);

  /* --> När man klickar på knapp lägg till. <--
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x ));
    } else { setCartItems([...cartItems, { ...product, qty }]);
    }};
*/
  return (
    <Container>
      <Flex>
        <Stack>
          <Heading paddingBottom="50" paddingTop="50">
            ProduitStore's Products
          </Heading>
          <ProductsBlock products={products} />
        </Stack>
      </Flex>
    </Container>
  );
}

export default Products;
