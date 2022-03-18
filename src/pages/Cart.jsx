// Importerar "useRecoilState, useRecoilValue och useSetRecoilState" från recoil.
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// Om man vill ha styling i css. --> import "./CartTest.css"; <--
// Importerar "cartState" state från min cart atom.
import { cartState } from "../components/recoil/cart/atom";
import {
  cartStatus,
  removeItemSelector,
} from "../components/recoil/cart/selectors";
// Av mina selektorer hämtar jag "cartStatus" & "removeItemSelector".
import { productsState } from "../components/recoil/products/productsAtom";
// importerar productState från min atom med de olika varorna.
import {
  Container,
  Heading,
  Stack,
  Flex,
  Box,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

// Byt namn till Cart.

// En funktion som hämtar produkterna till den nya varukorgen.
function handleAdd(product) {
  const newCart = [...cart, product];
  setCart(newCart);
}

/*
 * För att hämta produkterna från min atom med produkter.
 * {products.map((product) => (
 * <button key={product.id} onClick={() => handleAdd(product)}>
 *   {product.title} - {product.price}$
 * </button>
 * ))}
 */

function Cart() {
  // cart och setCart hämtas från min atom i cart-mappen.
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems, totalPrice } = useRecoilValue(cartStatus);
  const removeItem = useSetRecoilState(removeItemSelector);

  return (
    <div>
      <h3>Din varukorg</h3>
      {cart.map((product, index) => (
        <p>
          <img src={product.image} alt={product.title} />
          <div className="product-info">
            {product.title} {product.price}:-{" "}
            <Button className="cart-button" onClick={() => removeItem(index)}>
              Ta bort
            </Button>
          </div>
        </p>
      ))}
      <p>Antal varor: {totalItems}</p>
      <p>Summa: {totalPrice}</p>
      <button className="cart-button" disabled>
        Gå till betalning
      </button>
    </div>
  );
}

export default Cart;
