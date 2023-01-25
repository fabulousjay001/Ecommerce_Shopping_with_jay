import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  margin: 0px 36px;
  height: 48px;
  background: #b7bcc4;
  border-radius: 4px;
  width: 662px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 40px;
  :hover {
    background: #555658;
  }
`;

const Button = (props) => {
  return (
    <ButtonStyle>{props.text}</ButtonStyle>
  )
}

export default Button