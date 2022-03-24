import { useRecoilState } from "recoil";
import { cartState } from "../recoil/cart/atom";

export const handleAdd = () => {
  const [cartItems, setCartItems] = useRecoilState(props);
  return (product) => {};
};
