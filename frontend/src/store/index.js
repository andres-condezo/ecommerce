import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productDetailsReducers,
  productListReducers,
} from "./reducers/productReducers";

import { cartReducers } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
});

const storedCartItems = localStorage.getItem("cartItems");
const cartItemsFromStorage = storedCartItems ? JSON.parse(storedCartItems) : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
