import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { Mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../src/reqMethods";
import { useHistory } from "react-router-dom";

const KEY =
  "pk_test_51KWnEPSBqBQVzHg2E3a27gttWv8j9ztB6yJTQU4pJUQgT0f4CLvfUgGgBT3oFoaWY8pm4wpiMQAmpfrOmLMbzV5y00H4X1zRpg";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${Mobile({ padding: "10px" })}
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
  ${Mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column" })}
`;

const ProdDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${Mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${Mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: normal;
  height: 1px;
`;
const Summery = styled.div`
  flex: 1;
  border: 0.5px solid grey;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;
const SummeryTitle = styled.h1`
  font-weight: 200;
`;
const SummeryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummeryItemText = styled.span``;

const SummeryItemPrice = styled.span``;

const Btn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart:", cart.total);

  const [stripeToken, setStripeToken] = useState(null);

  const history = useHistory();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        console.log("res:", res);

        history.push("/success", { data: res.data });
      } catch (err) {
        console.log("err:", err);
      }
    };
    stripeToken && cart.total >= 1 && makeReq();
  }, [stripeToken, cart.total, history]);

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
            {cart.products.map((product) => (
              <>
                <Product>
                  <ProdDetails>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product: </b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>Id: </b> {product._id}
                      </ProductId>

                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size: </b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProdDetails>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summery>
            <SummeryTitle>ORDER SUMMERY</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemText> ₹ {cart.total}</SummeryItemText>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>ESTIMATED SHIPPING</SummeryItemText>
              <SummeryItemPrice> ₹ 5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>SHIPPING DISCOUNT</SummeryItemText>
              <SummeryItemPrice> ₹ -5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem type="total">
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice> ₹ {cart.total}</SummeryItemPrice>
            </SummeryItem>
            <StripeCheckout
              name="e-shop"
              image="https://scalebranding.com/wp-content/uploads/2020/10/EShop.jpg"
              billingAddress
              shippingAddress
              description="your total is ₹ 520"
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Btn>CHECKOUT NOW</Btn>
            </StripeCheckout>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
