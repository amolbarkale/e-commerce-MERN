import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopBtn = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  border: ${(props) => props.type === "filled" && "none"};
`;
const TopTexts = styled.div``;

const TopText = styled.div`
  padding: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summery = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBtn>CONTINUE SHOOPONG</TopBtn>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>YOUR WISHLIST</TopText>
          </TopTexts>
          <TopBtn type="filled">CHECKOUT NOW </TopBtn>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProdDetails>
                <Image src="https://www.bigcommerce.com/blog/wp-content/uploads/2018/02/Ecommerce-Product-Pages-Examples-5-1.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Pure synthetic premium Bag
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 86260
                  </ProductId>

                  <ProductColor />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProdDetails>
              <PriceDetails>price</PriceDetails>
            </Product>
          </Info>
          <Summery>Summery</Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
