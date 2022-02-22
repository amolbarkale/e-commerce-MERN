import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Badge } from "@material-ui/core";

import styled from "styled-components";
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid grey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Application</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Signin</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
