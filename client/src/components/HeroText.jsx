import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Бүх насныханд зориулсан цахим сургалт</h5>
      <h1>Юуг ч</h1>
      <h1>Хаанаас ч</h1>
      <h1>Хэзээ ч</h1>
      <h1>Суралц</h1>
      <BtnContainer>
        <button className="readmore">Цааш Унших</button>
        <button>Туршиж үзэх</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;