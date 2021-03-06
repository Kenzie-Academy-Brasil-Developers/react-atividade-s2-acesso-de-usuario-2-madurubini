import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router";
import Customer from "./pages/Customer";
import Company from "./pages/Company";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/customer/:id">
            <Customer />
          </Route>
          <Route path="/company/:id">
            <Company />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
