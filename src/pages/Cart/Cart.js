/** @format */

import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

const Container = styled.div`
  font-family: "inter";
  width: 1440px;
  margin: auto;
  //   height: 60vh;
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
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  heright: 50vh;
  margin-top: 20px;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #12a9a9;
  border:none;color:white
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;
const Image = styled.img`
  width: 200px;
  margin-top: 30px;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Underline = styled.hr`
//   background: red;
//   height: 1;
`;
const ProductAmount = styled.div`
  font-size: 24px;
`;
const ProductId = styled.span``;
const BoldText = styled.p`
  font-weight: bold;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const ProductSize = styled.span``;

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
                      <ProductColor color='black' />
                      <ProductSize>
                        <BoldText>Size:</BoldText>37.5s
                      </ProductSize>
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <IoAddOutline />
                    <ProductAmount>2</ProductAmount>
                    <IoRemoveOutline />
                  </ProductAmountContainer>
                  <ProductPrice>$ 50</ProductPrice>
                </PriceDetail>
              </Product>
              <Underline />
              <Product>
                <ProductDetail>
                  <Image src='https://www.armani.com/variants/images/20346390236454272/D/w480.jpg' />
                  <Details>
                    <ProductName>
                      <BoldText>Product:</BoldText>FABULOUS THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <BoldText>Id:</BoldText>987654321
                      <ProductColor color='black' />
                      <ProductSize>
                        <BoldText>Size:</BoldText>37.5s
                      </ProductSize>
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <IoAddOutline />
                    <ProductAmount>2</ProductAmount>
                    <IoRemoveOutline />
                  </ProductAmountContainer>
                  <ProductPrice>$ 50</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice>$100</SummaryItemPrice>
              </SummaryItem>{" "}
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$5.90</SummaryItemPrice>
              </SummaryItem>{" "}
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$-5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText type='total'>Total</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
