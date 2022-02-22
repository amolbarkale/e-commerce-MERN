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
    url("https://lnsel.com/wp-content/uploads/2019/03/ecommerce-website-design-768x432.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column; ;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Btn = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Component>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placaholder="username"></Input>
          <Input placaholder="password"></Input>
          <Btn>LOG IN</Btn>
          <Link>FORGOT PASSOWD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Component>
  );
};

export default Login;
