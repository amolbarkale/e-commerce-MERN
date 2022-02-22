import React from "react";
import styled from "styled-components";

const Component = styled.div`
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  background: linear-gradient(
      rgba(255, 255, 255, 0.637),
      rgba(255, 255, 255, 0.637)
    ),
    url("https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,w_1200/blog/blog/imagens-ecommerce.png");
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Btn = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
`;

const Reg = () => {
  return (
    <Component>
      <Wrapper>
        <Title>CRETAE AN ACCOUNT</Title>
        <Form>
          <Input placaholder="name"></Input>
          <Input placaholder="last name"></Input>
          <Input placaholder="username"></Input>
          <Input placaholder="email"></Input>
          <Input placaholder="password"></Input>
          <Input placaholder="conform password"></Input>
          <Agreement>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            soluta! Ipsa debitis iste voluptatibus minus.
          </Agreement>
          <Btn>SUBMIT</Btn>
        </Form>
      </Wrapper>
    </Component>
  );
};

export default Reg;
