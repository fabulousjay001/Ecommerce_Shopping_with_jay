import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 400px;
  width: 300px;
  margin-bottom: 100px;
`;

const ImageContainer = styled.div`
  height: 100%;
`;
const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div``;
const Title = styled.h1`
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
const Price = styled.div`
  color: teal;
  display: flex;
  justify-content: center;
`;

const CategoryItem = ({ item }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={item.img} />
      </ImageContainer>
      <Info>
        <Title>{item.title}</Title>
        <Price>{item.Price}</Price>
      </Info>
    </Card>
  );
};

export default CategoryItem;
