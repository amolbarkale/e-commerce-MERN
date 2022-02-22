import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import NewsLetter from "../Components/NewsLetter";
import { Add, Remove } from "@material-ui/icons";

const Component = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitile = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
`;

const Btn = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #e0dbdb;
  }
`;

const Amount = styled.span`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const Product = () => {
  return (
    <Component>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" />
        </ImgContainer>
        <InfoContainer>
          <Title>Nike 1st copy</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            nemo eaque repellat voluptatem veniam cum dolor consequatur
            accusantium fugiat sunt.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitile>Color</FilterTitile>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="green" />
            </Filter>
            <Filter>
              <FilterTitile>Size</FilterTitile>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Add />
              <Amount>1</Amount>
              <Remove />
            </AmountContainer>
            <Btn>ADD TO CART</Btn>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
    </Component>
  );
};

export default Product;
