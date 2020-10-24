import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { DetailsPage } from "./pages/DetailsPage";
import { CartPage } from "./pages/CartPage";
import { NavComponent } from "./_components/NavComponent";
import axios from "axios";
import { END_POINT } from "./utils/constants";

export const DataContext = createContext([]);

function App() {
  const [data, setData] = useState([]);
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(`${END_POINT}/products`);
      console.log("Context: ", res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
      setData([]);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Router>
      <DataContext.Provider value={data}>
        <div className="App">
          <NavComponent />
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/home" exact component={HomePage}></Route>
            <Route path="/products" exact component={ProductsPage}></Route>
            <Route path="/details/:id" component={DetailsPage}></Route>
            <Route path="/cart" exact component={CartPage}></Route>
          </Switch>
        </div>
      </DataContext.Provider>
    </Router>
  );
}

export default App;
