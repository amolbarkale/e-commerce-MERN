import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [prods, setProds] = useState([]);
  const [filteredProds, setfilteredProds] = useState([]);

  useEffect(() => {
    const getProd = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/prods?category=${cat}`
            : "http://localhost:5000/prods"
        );

        setProds(res.data);
      } catch (err) {
        console.log("err:", err);
      }
    };
    getProd();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProds(
        prods.filter((itm) =>
          Object.entries(filters).every(([key, value]) =>
            itm[key].includes(value)
          )
        )
      );
  }, [cat, filters, prods]);

  useEffect(() => {
    if (sort === "newest") {
      console.log("sort:");
      setfilteredProds((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProds((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setfilteredProds((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProds?.map((itm) => (
            <Product itm={itm} key={itm.id}></Product>
          ))
        : prods
            .slice(0, 8)
            .map((itm) => <Product itm={itm} key={itm.id}></Product>)}
    </Container>
  );
};

export default Products;
