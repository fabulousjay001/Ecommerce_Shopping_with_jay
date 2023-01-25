/** @format */

import React from "react";
import Categories from "../../components/Categories/Category";
// import Header from "../../components/Header/Header";
import styled from "styled-components";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Background = styled.div``;
const Home = () => {
  return (
    <Background>
      <Navbar/>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </Background>
  );
};

export default Home;
