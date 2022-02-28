import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from "../responsive";
const Container = styled.div`
background-color: #e48d8d
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${Mobile({ textAlign: "center", fontSize: "50px" })}
`;

const Dec = styled.div`
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 20px;
  ${Mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  ${Mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Btn = styled.button`
  flex: 1;
  border: none;
  background-color: #2874f0;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Dec>Get timely update from your favourite products</Dec>
      <InputContainer>
        <Input placeholder="Your email" />
        <Btn>
          <Send />
        </Btn>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
