import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
