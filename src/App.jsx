import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./partials/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
