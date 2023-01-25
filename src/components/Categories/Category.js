/**
 * eslint-disable array-callback-return
 *
 * @format
 */

import React from "react";
import styled from "styled-components";
import { Categories } from "../Data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  margin: 10px;
  width: 1440px;
  margin: auto;
  font-family: "inter";
  /* color: #ccc; */
  background: #f0f0f0;
`;

const Header = styled.h1`
  font-family: "inter";
  margin: 30px;
  /* color: #ccc; */
  background: #f0f0f0;
  width: 1440px;
  margin: auto;
`;
const Category = () => {
  return (
    <>
      <Header>Trending now</Header>
      <Container>
        {Categories.map((item) => {
          return <CategoryItem item={item} key={item} />;
        })}
      </Container>
    </>
  );
};

export default Category;
