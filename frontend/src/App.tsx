import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import CreateProducts from "./createProduct/createProducts";
import Home from "./Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CarritoDeCompras from "./Carrito/Carrito";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-product" element={<CreateProducts />} />
          <Route path="/create-product/:id" element={<CreateProducts />} />
          <Route path="/carrito" element={<CarritoDeCompras />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
