import { useRecoilState } from "recoil";
import { cartState } from "./atom";

export const handleAdd = () => {
  const [cartItems, setCartItems] = useRecoilState(props);
  return (product) => {};
};
