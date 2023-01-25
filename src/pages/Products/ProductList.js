/** @format */

import React from "react";
import { useState } from "react";
import styled from "styled-components";
// import { PopularProduct } from "../../components/Data";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import { color, colors, fruits, sizes, sort } from "./Data";

const Container = styled.div``;
const Title = styled.h1`
  width: 1440px;
  margin: auto;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // margin: 20px;
  width: 1440px;
  margin: 10px auto;
  padding: 10px 10px 10px;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  
`;
const Select = styled.select`
  outline: none;
  border: none;
  padding: 5px;
  margin: 5px;
  
`;
const Option = styled.option`
 
`;

const ProductList = () => {
  return (
    <Container>
      <Header />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select>
            <Option>-- Select Color --</Option>

            {colors.map((color) => (
              <Option value={color.value}>{color.text}</Option>
            ))}
          </Select>
          <Select>
            <Option>-- Select Size --</Option>

            {sizes.map((data) => (
              <Option value={data.value}>{data.text}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>

            {sort.map((data) => (
              <Option>{data.text}</Option>
            ))}
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
