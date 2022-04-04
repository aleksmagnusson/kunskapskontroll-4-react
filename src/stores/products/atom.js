import { atom } from "recoil";
// Använder axios för att hämta produkter i backend
// från https://k4backend.osuka.dev/products.

export const productState = atom({
  key: "productState",
  default: [],
});

export default productState;
