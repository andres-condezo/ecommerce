import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productDetailsReducers,
  productListReducers,
} from "./reducers/productReducers";

import { cartReducers } from "./reducers/cartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
});

const storedCartItems = localStorage.getItem("cartItems");
const cartItemsFromStorage = storedCartItems ? JSON.parse(storedCartItems) : [];

const storeduserInfo = localStorage.getItem("userInfo");
const userInfoFromStorage = storeduserInfo ? JSON.parse(storeduserInfo) : null;

const storedShippingAddress = localStorage.getItem("shippingAddress");
const shippingAddressFromStorage = storedShippingAddress
  ? JSON.parse(storedShippingAddress)
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
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
