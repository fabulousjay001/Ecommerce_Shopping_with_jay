/** @format */
import styled from "styled-components";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiFillStar,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
} from "react-icons/ai";
import { Data, sizes } from "./Data";

const Container = styled.div`
  display: flex;
  // justify-content: space-between;
  width: 1440px;
  padding-top: 165px;
  margin: auto;
  font-family: "inter";
`;
const ImageContainer = styled.div`
  display: flex;
`;
const Image = styled.img`
  position: relative;
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
  margin-top: 25px;
  justify-content: space-between;
  width: 220px;
`;
const Color = styled.div`
  font-weight: 500;
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
  padding: 8px;
  border: 1px solid #d9d9d9;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
const Button = styled.button``;

const ProductDetails = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src='/image.png' />
        <ZoomContainer>
          <AiOutlineZoomIn size={20} color={"#12A9A9"} />
          <AiOutlineZoomOut size={20} color={"#12A9A9"} />
        </ZoomContainer>
      </ImageContainer>

      <InfoContainer>
        <Title>Topman revere sheer shirt in gold zigzag burnout</Title>
        <Text>{Data}</Text>
        <Ratings>
          <Text> 4.9 </Text> <AiFillStar color={"#F59C17"} size={25} />
          <Text>11k</Text>
          <Text>Reviews 4k+ sold</Text>
        </Ratings>
        <Text>Color:</Text> <Color>Black</Color>
        <Text>Select size: </Text>
        <Size>
          {sizes.map((data) => (
            <SizeButton>{data.text}</SizeButton>
          ))}
        </Size>
        <Text>Quantity: </Text>{" "}
        <Quantity>
          <AiOutlinePlusSquare size={20} />

          <AiOutlineMinusSquare size={20} />
        </Quantity>
        <Text>Price:</Text>
        <Price>14$</Price>
        <Button>Buy Now</Button>
        <Button>Add to Cart</Button>
      </InfoContainer>
    </Container>
  );
};

export default ProductDetails;
