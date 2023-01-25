/** @format */

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background: black;
  font-family: "inter";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
`;
const Description = styled.div`
  color: white;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 30%;
  background: white;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  font-size: 20px;
`;
const Button = styled.button`
  padding: 10px;
  background: teal;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Description> Subscribe to Our Newsletter </Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>Subscribe</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
