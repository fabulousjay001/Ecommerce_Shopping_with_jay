/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import Faq from "./pages/Faq/Faq";
import Login from "./pages/Form/Login/Login";
import Signup from "./pages/Form/Signup/Signup";
import Home from "./pages/HomePage/Home";
import ProductDetails from "./pages/Products/ProductDetails";
import ProductList from "./pages/Products/ProductList";




function App() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products-details' element={<ProductDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
