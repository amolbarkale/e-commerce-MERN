import {
  Facebook,
  Instagram,
  Map,
  MailOutline,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${Mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({ background: "#fff8f8", padding: "0px" })}
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
  ${Mobile({ textAlign: "center" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Titlee = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 49%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 80%;
  height: 15%;
  object-fit: cover;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo></Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque hic quo cumque facere ipsa aperiam rerum fugiat aut nobis.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Titlee>Useful links</Titlee>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Titlee>Contact</Titlee>
        <ContactItem>
          <Map style={{ marginRight: "10px" }} /> 41,Bhavai peth, near Big
          bazar, Main road
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 9696969696
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> barkalemaol@gmail.com
        </ContactItem>
        <Payment src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" />
      </Right>
    </Container>
  );
};

export default Footer;
