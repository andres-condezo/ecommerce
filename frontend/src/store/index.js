import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productDetailsReducers,
  productListReducers,
} from "./reducers/productReducers";

import { cartReducers } from "./reducers/cartReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
  userLogin: userLoginReducer,
});

const storedCartItems = localStorage.getItem("cartItems");
const cartItemsFromStorage = storedCartItems ? JSON.parse(storedCartItems) : [];

const storeduserInfo = localStorage.getItem("userInfo");
const userInfoFromStorage = storeduserInfo
  ? JSON.stringify(storeduserInfo)
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
