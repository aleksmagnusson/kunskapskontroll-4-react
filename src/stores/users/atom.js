// Atom för "Recoil" stores användar-data/backend.
import { atom } from "recoil";
// Axios för att hantera data.
import axios from "axios";

const usersState = atom({
  key: "UsersState",
  default: [],
  effects: [
    ({ setSelf }) => {
      axios
        .get("https://k4backend.osuka.dev/users")
        .then((response) => setSelf(response.data))
        .catch((error) => console.log(error));
    },
  ],
});

export default usersState;
