import "./App.css";
import { Route, Switch } from "react-router-dom";
import Payment from "./Components/Payment";
import Success from "./Components/Success";
function App() {
  return (
    <>
      <Switch>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
