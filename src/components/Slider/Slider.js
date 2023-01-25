/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { SliderData } from "../Data";

const Container = styled.div`
  width: 1440px;
  margin: auto;
  height: 100vh;
  display: flex;
  position: relative;
  font-family: "inter";
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  background: white;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  // background: #${(props) => props.bg};
  background: #f0f0f0;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.img`
  height: 80%;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  font-weight: 500;
  margin: 50px 0px;
  font-size: 20px;
`;
const Button = styled.button`
  padding: 15px;
  background: teal;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  useEffect(() => {
    const lastIndex = SliderData.length - 1;
    if (sliderIndex < 0) {
      setSliderIndex(lastIndex);
    }
    if (sliderIndex > lastIndex) {
      setSliderIndex(0);
    }
  }, [sliderIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSliderIndex(sliderIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [sliderIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 5);
    } else {
      setSliderIndex(sliderIndex < 5 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {SliderData.map((data) => {
          return (
            <>
              <Slide bg={data.bg} key={data.id}>
                <ImageContainer>
                  <Image src={data.img}></Image>
                </ImageContainer>
                <InfoContainer>
                  <Title>{data.title}</Title>
                  <Description>{data.decription}</Description>
                  <Button>{data.button}</Button>
                </InfoContainer>
              </Slide>
            </>
          );
        })}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};
export default Slider;
