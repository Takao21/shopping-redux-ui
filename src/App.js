import React from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { DetailsPage } from "./pages/DetailsPage";
import { CartPage } from "./pages/CartPage";
import { NavComponent } from "./_components/NavComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponent />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/home" exact component={HomePage}></Route>
          <Route path="/products" exact component={ProductsPage}></Route>
          <Route path="/details" component={DetailsPage}></Route>
          <Route path="/cart" exact component={CartPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
