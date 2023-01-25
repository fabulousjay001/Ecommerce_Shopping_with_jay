/**
 * eslint-disable array-callback-return
 *
 * @format
 */

import React from "react";
import styled from "styled-components";
import { PopularProduct } from "../Data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1440px;
  margin: auto;
  justify-content: space-between;
  font-family: "inter";
`;
const Products = () => {
  return (
    <>
      <Container>
        {PopularProduct.map((item) => {
          return <Product item={item} key={item} />
        })}
      </Container>
    </>
  );
};

export default Products;
