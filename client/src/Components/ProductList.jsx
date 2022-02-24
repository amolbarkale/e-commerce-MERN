import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import { Mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  ${Mobile({ fontSize: "18px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${Mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600px;
  margin-right: 20px;
  ${Mobile({ margin: "0", fontSize: "14px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${Mobile({ margin: "10px 0" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected Newest>
              Newest
            </Option>
            <Option>Price(asc)</Option>
            <Option>Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
