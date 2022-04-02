/* Denna atom är till för att sätta kundvagnen/cart -
 * och hämta produkterna från backend.
 */

import { atom } from "recoil";

const cartState = atom({
  key: "cartState",
  default: [],
});

export default cartState;
