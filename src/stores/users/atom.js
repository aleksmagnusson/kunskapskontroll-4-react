// Atom för "Recoil" stores användar-data/backend.
import { atom } from "recoil";

export const usersState = atom({
  key: "usersState",
  default: [],
});

export default usersState;
