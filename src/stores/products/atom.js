import { atom } from "recoil";
// Använder axios för att hämta produkter i backend
// från https://k4backend.osuka.dev/products.
import axios from "axios";

const productsState = atom({
  key: "ProductsState",
  default: [],
  effects: [
    ({ setSelf }) => {
      axios
        .get("https://k4backend.osuka.dev/products")
        .then((response) => setSelf(response.data))
        .catch((error) => console.log(error));
    },
  ],
});

export default productsState;
