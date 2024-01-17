import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import OrderSummery from "./pages/OrderSummery";
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />

          <Route path="order-summery" element={<OrderSummery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
