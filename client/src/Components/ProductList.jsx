import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import { Mobile } from "../responsive";
import { useLocation } from "react-router-dom";
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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();

  const cat = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    const val = e.target.value;
    setFilters({ ...filters, [e.target.name]: val });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>brown</Option>
            <Option>yellow</Option>
            <Option>golden</Option>
            <Option>blue</Option>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>X</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="desc">Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
