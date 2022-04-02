import React from "react";
import useCart from "../hooks/useCart";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import productsState from "../stores/products/atom";
import SingleProductCard from "../components/SingleProductCard";
import { Box } from "@chakra-ui/react";

function Product() {
  const cart = useCart();
  const { productId } = useParams();
  const products = useRecoilValue(productsState);
  const product = products.find(
    (product) => product.id.toString() === productId
  );

  return (
    <Box>
      <div>
        {!product ? (
          "cannot find product."
        ) : (
          <SingleProductCard
            key={product.id}
            product={product}
            onClick={() => cart.addItem(product.id)}
          />
        )}
      </div>
    </Box>
  );
}

export default Product;
