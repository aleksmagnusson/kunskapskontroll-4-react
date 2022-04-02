/* Denna atom är till för att sätta kundvagnen/cart -
 * och hämta produkterna från backend.
 */
import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});
