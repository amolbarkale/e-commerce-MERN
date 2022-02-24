import React from "react";
import { CategoriesData } from "../data";
import styled from "styled-components";
import CategoryItm from "./CategoryItm";
import { Mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${Mobile({ padding: "20px", flexDirection: "column" })}
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
