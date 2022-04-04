import { atom } from "recoil";
// Använder axios för att hämta produkter i backend
// från https://k4backend.osuka.dev/products.

export const productsState = atom({
  key: "productsState",
  default: [],
});

export default productsState;
