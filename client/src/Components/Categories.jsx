import React from "react";
import { CategoriesData } from "../data";
import styled from "styled-components";
import CategoryItm from "./CategoryItm";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {CategoriesData.map((itm) => (
        <CategoryItm itm={itm} key={itm.id} />
      ))}
    </Container>
  );
};

export default Categories;
