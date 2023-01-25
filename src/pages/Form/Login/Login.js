/** @format */

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../../../components/Button/Button";
import { emailData, passwordField, validation } from "../Data";

const Root = styled.div`
  width: 100vw;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  background: #f0f0f0;
  height: 100vh;
  font-family: "DM Sans", sans-serif;
`;
const Form = styled.form``;
const Wrapper = styled.div`
  height: auto;
  background: #ffffff;
  width: 720px;
  margin: 100px auto;
  box-sizing: border-box;
  border-radius: 8px;
`;
const Header = styled.h1`
  color: #000000;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
`;
const Box = styled.div`
  padding-top: 2px;
`;
const Text = styled.p`
  color: #777777;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;
const Link = styled.span`
  color: #004cbd;
  padding-left: 8px;
  cursor: pointer;
`;
const Label = styled.label`
  margin-left: 32px;
  margin-bottom: 4px;
  margin-top: 21px;
  font-weight: 500;
  font-size: 14px;
  color: #1a1a1a;
`;

const Input = styled.input`
  width: 320px;
  display: flex;
  margin: 4px 3px 22px 32px;
  width: 656px;
  height: 40px;
  background-color: transparent;
  border: #f0f0f0 1px solid;
  border-radius: 4px; 
  outline: none;
   padding-left:12px;
   font-siza:20px;
  font-family: "DM Sans", sans-serif;
  ::placeholder{
    color:#CACACA;
    font-weight: 400;
    font-size: 14px;
    padding-left:4px;
  font-family: "DM Sans", sans-serif;
  }
}
`;
const PasswordInputField = styled.div`
  position: relative;
  display: flex;
`;
const IconClosed = styled.span`
  // cursor: pointer;
  color: #999f9b;
  // display:flex;
  // justify-content:flex-end;
  // width:100%;
  cursor: pointer;
  color: #999f9b;
  position: absolute;
  z-index: 9999;
  right: 70px;
  top: 15px;
`;
const IconOpened = styled.span`
  cursor: pointer;
  color: #999f9b;
  position: absolute;
  right: 70px;
  top: 15px;
`;
const ValidationContainer = styled.div`
  padding-left: 3px;
  margin-bottom: 40px;
`;
const ValidationBox = styled.div`
  color: #999b9f;
  align-items: center;
  margin-left: 28px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 4px;
  width: 280px;
  display: flex;
`;
const ValidationText = styled.div`
  margin-left: 8px;
`;
const Icon = styled.div`
  width: 7px;
  // background:green
`;
const IconFilled = styled.div`
  border-radius: 50%;
  background: green;
  width: 6px;
  height: 6px;
`;

const Login = () => {
  const [type, setType] = useState("password");
  const [upperValidation, setUpperValidation] = useState(false);
  const [numberValidation, setNumberValidation] = useState(false);
  const [symbolValidation, setSymbolValidation] = useState(false);
  const [lengthValidation, setLengthValidation] = useState(false);

  const handleChange = (value) => {
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const symbol = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    if (upper.test(value)) {
      setUpperValidation(true);
    } else {
      setUpperValidation(false);
    }
    if (number.test(value)) {
      setNumberValidation(true);
    } else {
      setNumberValidation(false);
    }
    if (symbol.test(value)) {
      setSymbolValidation(true);
    } else {
      setSymbolValidation(false);
    }
    if (length.test(value)) {
      setLengthValidation(true);
    } else {
      setLengthValidation(false);
    }
  };

  return (
    <Root>
      <Wrapper>
        <Box>
          <Header>Log in</Header>
          <Text>
            If you have an account, <Link>Sign up</Link>
          </Text>
          {emailData.map((data) => {
            return (
              <>
                <Form autoComplete={"off"}>
                  <Label> {data.label}</Label>
                  <Input type={data.type} placeholder={data.placeholder} />
                </Form>
              </>
            );
          })}
          {passwordField.map((data) => {
            return (
              <>
                <Form autoComplete={"off"}>
                  <Label> {data.label}</Label>
                  <PasswordInputField>
                    <Input
                      type={type}
                      placeholder={data.placeholder}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                    <span>
                      {type === "password" ? (
                        <IconClosed onClick={() => setType("text")}>
                          <AiOutlineEyeInvisible size={20} />
                        </IconClosed>
                      ) : (
                        <IconOpened onClick={() => setType("password")}>
                          <AiOutlineEye size={20} />
                        </IconOpened>
                      )}
                    </span>
                  </PasswordInputField>
                  {validation.map((data) => {
                    return (
                      <ValidationContainer>
                        <ValidationBox>
                          <Icon>
                            {upperValidation ? <IconFilled /> : data.icon}
                          </Icon>
                          <ValidationText>{data.upperCaseCheck}</ValidationText>
                        </ValidationBox>

                        <ValidationBox>
                          <Icon>
                            {lengthValidation ? <IconFilled /> : data.icon}
                          </Icon>
                          <ValidationText>{data.characterCheck}</ValidationText>
                        </ValidationBox>
                        <ValidationBox>
                          <Icon>
                            {numberValidation ? <IconFilled /> : data.icon}
                          </Icon>
                          <ValidationText>{data.numberCheck}</ValidationText>
                        </ValidationBox>
                        <ValidationBox>
                          <Icon>
                            {symbolValidation ? <IconFilled /> : data.icon}
                          </Icon>
                          <ValidationText>{data.symbolcheck}</ValidationText>
                        </ValidationBox>
                      </ValidationContainer>
                    );
                  })}
                </Form>
              </>
            );
          })}
          <Button text='Log in' />
        </Box>
      </Wrapper>
    </Root>
  );
};

export default Login;
