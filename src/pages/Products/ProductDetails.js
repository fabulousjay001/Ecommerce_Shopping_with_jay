/** @format */
import styled from "styled-components";
import { useState } from "react";
import { AiOutlineZoomIn, AiOutlineZoomOut, AiFillStar } from "react-icons/ai";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { Data, sizes, style } from "./Data";

const Container = styled.div`
  display: flex;
  // justify-content: space-between;
  width: 1440px;
  padding-top: 165px;
  margin: auto;
  font-family: "inter";
`;
const ImageContainer = styled.div`
  // display: flex;
`;
const Image = styled.img`
  // position: relative;
`;
const ImgBox = styled.div`
  // position: relative;
`;
const ZoomContainer = styled.div`
  background: #ffffff;
  position: absolute;
  height: 76px;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;
const InfoContainer = styled.div`
  margin-left: 96px;
  margin-right: 205px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;
const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 32px;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  // margin-top: 8px;
  justify-content: space-between;
  width: 220px;
`;
const Color = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const Size = styled.div``;
const SizeButton = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 40px;
  border: 1px solid #d9d9d9;
  margin-right: 16px;
  &:hover {
    background: #12a9a9;
  }
`;
const Quantity = styled.button`
  padding: 4px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  width: 80px;
  height: 38px;
  align-items: center;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 185px;
  margin-top: 32px;
`;
const Button = styled.button`
  display: flex;
  background: white;
  padding: 12px;
  border: solid 1px #12a9a9;
  color: #12a9a9;
  border-radius: 10px;
  :hover& {
    background: #12a9a9;
    color: white;
  }
`;

const ProductDetails = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container>
      <ImageContainer>
        <ImgBox>
          <Image src='https://www.armani.com/variants/images/20346390236454272/D/w480.jpg' />
          <ZoomContainer>
            <AiOutlineZoomIn size={20} color={"#12A9A9"} />
            <AiOutlineZoomOut size={20} color={"#12A9A9"} />
          </ZoomContainer>
        </ImgBox>
      </ImageContainer>

      <InfoContainer>
        <Title>Topman revere sheer shirt in gold zigzag burnout</Title>
        <Text>{Data}</Text>
        <Ratings>
          <Text> 4.9 </Text> <AiFillStar color={"#F59C17"} size={25} />
          <Text>11k</Text>
          <Text>Reviews 4k+ sold</Text>
        </Ratings>
        <Text>Color:</Text>{" "}
        <Color>
          <FilterColor color='white' />
          <FilterColor color='black' />
          <FilterColor color='gray' />
          <FilterColor color='blue' />
        </Color>
        <Text>Select size: </Text>
        <Size>
          {sizes.map((data) => (
            <SizeButton>{data.text}</SizeButton>
          ))}
        </Size>
        <Text>Quantity: </Text>{" "}
        <Quantity>
          <CiSquareMinus size={20} style={{ color: "#12A9A9" }} />
          <CiSquarePlus
            size={20}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            style={{
              ...style.normal,
              ...(hover ? style.hover : null),
            }}
          />
        </Quantity>
        <Text>Price:</Text>
        <Price>$14</Price>
        <ButtonContainer>
          <Button>Buy Now</Button>
          <Button>Add to Cart</Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductDetails;
