/** @format */

import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navDataLeft, navDataRight } from "../Data";

const Container = styled.div`
  font-family: 'inter';
  margin: auto;
  width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 28px 0px;
`;

const Left = styled.div`
  font-size: 16px;
`;
const LogoName = styled.div`
  cursor: pointer;
`;
const SearchContainer = styled.div`
  width: 136px;
  display: flex;
  justify-content: space-between;
  margin-right: 48px;
`;
const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #666666;
  font-size: 14px;
  color: black;
  background: #f0f0f0;
`;

const Search = styled.div`
  width: 100%;
`;
const Right = styled.div`
  display: flex;
  justify-contents: space-between;
  align-items: center;
`;
const RightLink = styled.button`

  border:none;
  margin-left:16px;
  display:flex;
  
`;
const MenuItem = styled.div``;
const RightItem = styled.div``;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const LinkStyle = {
  textDecoration: "none",
  marginRight: "32px",
  color: "#666666",
};

const Navbar = () => {
  return (
    <Container>
      <Left>
        <LogoName>FAB_JAY</LogoName>
      </Left>
      <Center>
        {navDataLeft.map(({ id, path, text }) => {
          return (
            <Link to={path} key={id} style={LinkStyle}>
              <MenuItem>{text}</MenuItem>
            </Link>
          );
        })}
      </Center>
      <Right>
        <SearchContainer>
          <Search>
            <Input placeholder='Search' />
          </Search>
          <Search>
            <AiOutlineSearch size={12} />
          </Search>
        </SearchContainer>
        {navDataRight.map(({ id, path, text }) => {
          return (
            <RightLink>
              <Link to={path} key={id} style={LinkStyle}>
                <RightItem>{text}</RightItem>
              </Link>
            </RightLink>
          );
        })}
        <AiOutlineShoppingCart size={20} />
      </Right>
    </Container>
  );
};

export default Navbar;
