import Home from "./component/Home";
import Products from "./component/Products";
import Navbar from "./component/Navbar";
import Product from "./component/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
