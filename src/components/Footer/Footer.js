/** @format */

import React from "react";
import styled from "styled-components";
import { Customer, Info } from "./Data";

const FooterContainer = styled.div`
  background: #12a9a9;
  color: white;
  font-family: "inter";
`;
const Container = styled.div`
  display: flex;
  margin: auto;
 
`;

const Left = styled.div`
  margin-left: 100px;
  // padding-right:140px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  flex: 1;
`;
const Right = styled.div`
  flex: 2;
  margin-left: 100px;
`;

const Header = styled.div`
  font-weight: Bold;
  margin-top: 64px;
  margin-bottom: 32px;
  font-family: "inter";
  font-weight: 700;
  font-size: 32px;
`;

const Text = styled.div`
  font-family: "inter";
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 20px;
  line-height: 24px;
  font-weight: 400;
`;
const Underline = styled.hr`
  border: 1px solid #ffffff;
 
`;
const CopyRight = styled.div`
  margin-top: 8px;
  color: white;
  margin-left: 100px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Left>
          <Header>Fab_jAY</Header>
          {Object.values(Info).map((data, index) => {
            return <Text key={index}>{data}</Text>;
          })}
        </Left>
        <Right>
          <Header>Fab Jay</Header>
          {Object.values(Customer).map((data, index) => {
            return <Text key={index}>{data}</Text>;
          })}
        </Right>
      </Container>
      <Underline />
      <CopyRight>Copyright FabJaystores, 2023</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
