/** @format */

import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";

const Container = styled.div`
  font-family: "inter";
  width: 1440px;
  margin: auto;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#12a9a9" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;
const Product = styled.div`
  flex: 1;
`;
const ProductDetail = styled.div`
  flex: 1;
`;
const Details = styled.div``;
const ProductName = styled.div``;
const Image = styled.img`
  flex: 1;
`;
const PriceDetail = styled.div`
  flex: 1;
`;
const ProductId = styled.div``;
const BoldText = styled.p`
  font-weight: bold;
`;
const ProductColor = styled.div``;
const ProductSize = styled.div``;

const Cart = () => {
    return (
      <>
        <Container>
          <Navbar />
          <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag(2) </TopText>
                <TopText>Shopping Bag(2) </TopText>
              </TopTexts>
              <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src='https://www.armani.com/variants/images/20346390236454272/D/w480.jpg' />
                    <Details>
                      <ProductName>
                        <BoldText>Product:</BoldText>FABULOUS THUNDER SHOES
                      </ProductName>
                      <ProductId>
                        <BoldText>Id:</BoldText>987654321
                        <ProductColor />
                        <ProductSize>
                          <BoldText>Size:</BoldText>37.5s
                        </ProductSize>
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail></PriceDetail>
                </Product>
              </Info>
              <Summary>summary</Summary>
            </Bottom>
          </Wrapper>
        </Container>
        <Footer />
      </>
    );
};

export default Cart;
