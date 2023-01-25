/** @format */

import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";

const Container = styled.div``;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
