/** @format */

import React from "react";
import styled from "styled-components";
import { Customer, Info } from "./Data";

const Container = styled.div`
  background: #f0f0f0;
  display: flex;
  width: 1440px;
  margin: auto;
`;

const Left = styled.div`
  margin: 20px;
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  margin: 20px;
`;
// const Right = styled.div`
//   flex: 1;
// `;
const Header = styled.div`
  font-weight: Bold;
  margin: 20px;
  font-family: "inter";
`;

const Text = styled.div`
  margin: 20px;
  font-family: "inter";
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Header>Fab Jay</Header>
        {Object.values(Info).map((data, index) => {
          return <Text key={index}>{data}</Text>;
        })}
      </Left>
      <Center>
        <Header>Fab Jay</Header>
        {Object.values(Customer).map((data, index) => {
          return <Text key={index}>{data}</Text>;
        })}
      </Center>
    </Container>
  );
};

export default Footer;
