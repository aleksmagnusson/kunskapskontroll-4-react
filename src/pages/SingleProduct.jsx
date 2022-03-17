import React from "react";
import { useParams } from "react-router-dom";
/*
 * useRecoilValue används när man vill
 * returnera ett värde som är givet till Recoil state.
 */
import { useRecoilValue } from "recoil";
// Hämtar in ProductsAtom från productsState.
import { productsState } from "../components/recoil/products/ProductsAtom";

function SingleProduct() {
  const params = useParams();
  const products = useRecoilValue(productsState);
  // "useRecoilValue" hämtar "productsState" från "ProductsAtom.js"

  const product = products.find((product) => product.id === params.productId);

  return <div>{product.title}</div>;
}

export default SingleProduct;
