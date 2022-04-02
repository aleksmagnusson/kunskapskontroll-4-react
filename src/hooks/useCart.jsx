// Importerar "useRecoilState" från Recoil.
import { useRecoilState } from "recoil";
// Hämtar också "cartState" från cart atomen.
import { cartState } from "../stores/cart/atom";

// Funktioner för Cart.
function useCart() {
  // Skapar en array med två states.
  const [cart, setCart] = useRecoilState(cartState);

  // Hämta X antal produkter från backend.
  function setItemQuantity(id, quantity) {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  }
  // Hämta antal produkter från backend.
  function getItemQuantity(id) {
    const item = cart.find((item) => item.id === id);
    return !item ? 0 : item.quantity;
  }

  // Lägg till produkt/item.
  function addItem(id) {
    const quantity = getItemQuantity(id);
    if (quantity > 0) {
      setItemQuantity(id, quantity + 1);
      return;
    }
    setCart([...cart, { id, quantity: 1 }]);
  }
  // Returnera och hämta funktioner.
  return {
    items: cart,
    setItemQuantity,
    getItemQuantity,
    addItem,
  };
}

export default useCart;
