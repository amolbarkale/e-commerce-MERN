import "./App.css";
import Topbar from "./Component/topbar/Topbar";
import Sidebar from "./Component/sidebar/Sidebar";
import Home from "./Pages/home/Home";
import { Switch, Route } from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/userPage/User";
import NewUser from "./Pages/newUser/NewUser";
import ProdList from "./Pages/prodList/ProdList";
import Product from "./Pages/product/Product";
import NewProd from "./Pages/newProduct/NewProd";
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProdList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProd />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
