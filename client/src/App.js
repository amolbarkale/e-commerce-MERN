import "./App.css";
import Home from "./Pages/Home";
import ProductList from "./Components/ProductList";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Reg from "./Pages/Reg";
import Product from "./Pages/Product";
import { Route, Switch, Redirect } from "react-router-dom";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // const user = false;
  console.log("user:", user);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products/:category">
        <ProductList />
      </Route>
      <Route path="/product/:id">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/reg">{user ? <Redirect to="/" /> : <Reg />}</Route>
    </Switch>
  );
}

export default App;
