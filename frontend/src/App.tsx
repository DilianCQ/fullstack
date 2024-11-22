import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import CreateProducts from "./createProduct/createProducts";
import Home from "./Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-product" element={<CreateProducts />} />
          <Route path="/create-product/:id" element={<CreateProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
