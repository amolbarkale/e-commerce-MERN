import styled from "styled-components";
import { Mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${Mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Btn = styled.button`
  border: none;
  padding: 10px;
  color: grey;
  cursor: pointer;
  background-color: white;
  font-weight: 600;
`;

const CategoryItm = ({ itm }) => {
  return (
    <Container>
      <Link to={`/products/${itm.category}`}>
        <Image src={itm.img}></Image>
        <Info>
          <Title>{itm.title}</Title>
          <Btn>SHOP NOW</Btn>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItm;
