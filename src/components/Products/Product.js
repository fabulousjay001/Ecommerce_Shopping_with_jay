/** @format */

import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Icon = styled.div`
  opacity: 0;
  // display: flex;
  flex-direction: row;
  border-radius: 50%;
  background: white;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding-left: 4px;
  transition: all 0.4s ease-out;
  cursor: pointer;
  &:hover {
    background: black;
    transform: scale(1.2);
    color: white;
  }
`;
const Card = styled.div`
  width: 300px;
  margin-bottom: 90px;
  &:hover ${Icon} {
    opacity: 1;
    transition: all 0.4s ease-out;
  }
`;
const Info = styled.div``;
const Title = styled.h1`
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
const ImageContainer = styled.div`
  // height: 350px;
  position: relative;
`;
const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  object-fit: cover;
  height: 35vh;
`;
const Price = styled.div`
  color: teal;
  display: flex;
  justify-content: center;
`;
const IconContainer = styled.div`
  width: 100px;
  position: absolute;
  right: 0px;
  top: 20px;
  display: flex;
  gap: 8px;
`;

const TitleContainer = styled.div`
  //  margin-top:40px
`;

const Product = ({ item }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={item.img} />
        <IconContainer>
          <Icon>
            <AiOutlineHeart />
          </Icon>
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Icon>
            <AiOutlineShoppingCart />
          </Icon>
        </IconContainer>
      </ImageContainer>
      <Info>
        <TitleContainer>
          <Title>{item.title}</Title>
          <Price>{item.Price}</Price>
        </TitleContainer>

        {/* <Button>SHOP NOW</Button> */}
      </Info>
    </Card>
  );
};

export default Product;
