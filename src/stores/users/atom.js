// Atom för "Recoil" stores användar-data/backend.
import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: [],
});

export default userState;
