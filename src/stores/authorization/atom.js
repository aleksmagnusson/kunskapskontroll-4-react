// Använder "Recoil" för att hämta produkt-data och data från backend.
import { atom } from "recoil";

/* atom/atomer används definerar en enhet
 * (key) i det globala tillståndsobjektet för
 * applikationen.
 */

export const authState = atom({
  key: "authState",
  default: {
    token: null,
    user: null,
  },
});

export default authState;
