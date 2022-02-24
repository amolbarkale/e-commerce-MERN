import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Badge } from "@material-ui/core";
import { Mobile } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  ${Mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Mobile({ padding: "10px 0" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Mobile({ flex: "2", justifyContent: "center" })}
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
  ${Mobile({ display: "none" })}
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
  ${Mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${Mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${Mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-shop</Logo>
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
