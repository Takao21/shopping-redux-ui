import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeLastItem,
  prevPage,
  nextPage,
} from "../redux_actions";

export const HomePage = () => {
  const cart = useSelector((state) => state.updateCartReducer);
  const pageIndex = useSelector((state) => state.updatePageIndexReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Homepage</h1>

      <button onClick={() => dispatch(addToCart())}>Add to Cart</button>
      <button onClick={() => dispatch(removeLastItem())}>
        Remove Last Item
      </button>
      <button onClick={() => dispatch(prevPage())}>Prev Page</button>
      <button onClick={() => dispatch(nextPage())}>Next Page</button>
      <div>
        <h2>Page: {pageIndex}</h2>
      </div>
      <div>
        <h2>Cart: {cart}</h2>
      </div>
    </div>
  );
};
