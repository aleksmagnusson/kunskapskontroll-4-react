import "./App.css";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

/* "Home" är startsidan för kunskapkontroll 4 där det finns en enkel bild med en välkomstext till användaren.
 Innuti navigationsfältet ska det finnas tillgång för användaren att komma tillbaka till "Home", se de tillgängliga produkter som finns i "products".
 Varje produkt har ett produktId där man ska kunna se detaljer för varje produkt. Detta finns i "ProductDetail". Det skall även finnas en Varukorg där man ska kunna se sina produkter i "Cart".

 Det som är nytt från kunskapskontroll 3 är att man ska kunna logga in med hjälp av "Login" där befintlig eller ny användare ska kunna logga in.
 Om man är ny användare så ska man registrera sig på sidan "Register" där ska man kunna skapa ny användare med hjälp av Backend API från https://k4backend.osuka.dev/ där man följer informationen som finns på https://k4backend.osuka.dev/docs.
 När man väl loggat in ska man kunna se över sin profil på en särskild sida ""
 */

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
