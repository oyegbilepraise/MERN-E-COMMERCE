import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from './pages/Product'
import ProductList from './pages/ProductList';
import Login from "./pages/Login";
import Register from "./pages/Register";

import Cart from "./pages/Carts";

import { LocationProvider } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='products/:category' element={<ProductList />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  )
};

export default App;