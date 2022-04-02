// Använder "Recoil" för att hämta produkt-data och data från backend.
import { atom } from "recoil";

/* atom/atomer används definerar en enhet
 * (key) i det globala tillståndsobjektet för
 * applikationen.
 */

// "role" används för att bestämma vilken roll användaren ("user") har.
// Beroende på om det är "admin" eller vanlig "user" som loggar in.

const authState = atom({
  key: "authState",
  default: {
    token: null,
    user: { role: null },
  },
});

export default authState;
