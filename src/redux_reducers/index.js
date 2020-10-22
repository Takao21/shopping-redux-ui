import updateCartReducer from "./updateCart";
import updatePageIndexReducer from "./updatePageIndex";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  updateCartReducer,
  updatePageIndexReducer,
});

export default allReducers;
