/**
 * eslint-disable array-callback-return
 *
 * @format
 */

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import styled from "styled-components";
import { FaqData } from "../PageData";
import { useState } from "react";

const Root = styled.div`
  width: 100vw;
  background: #f0f0f0;
  height: 100vh;
  font-family: "DM Sans", sans-serif;
`;
const Main = styled.div`
  font-family: "inter";
  padding-top: 80px;
  width: 1440px;
  margin: auto;
`;

const Container = styled.div``;

const CardContainer = styled.div`
  border: 1px solid #eae6eb;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 1px 1px rgba(50, 50, 50, 0.75);
  background: #ffffff;
`;

const Header = styled.h1`
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin-left: 52px;
`;
const Info = styled.div`
  width: 100%;
`;
const Text = styled.p`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin-left: 52px;
  width: 90%;
  color: red;
`;
// eslint-disable-next-line
const Icon = styled.div`
  font-size: 16px;
`;
const Faq = () => {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <Root>
      <Main>
        <Container>
          {FaqData.map((data) => {
            return (
              <CardContainer>
                <Header>
                  <Info> {data.question} </Info>

                  {/* <AiOutlineMinusCircle onClick={() => setShowResponse(!showResponse)}/> */}
                  {showResponse ? (
                    <AiOutlineMinusCircle
                      size={20}
                      onClick={() => setShowResponse(!showResponse)}
                    />
                  ) : (
                    <AiOutlinePlusCircle
                      size={20}
                      onClick={() => setShowResponse(!showResponse)}
                    />
                  )}
                </Header>
                {showResponse && <Text>{data.answer}</Text>}
              </CardContainer>
            );
          })}
        </Container>
      </Main>
    </Root>
  );
};

export default Faq;
