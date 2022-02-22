import React from "react";
import styled from "styled-components";
import { popularProduct } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProduct.map((itm) => (
        <Product itm={itm} key={itm.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
