import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartReducer from "../reducers/cartReducers";
import bookReducer from "../reducers/workReduces";


const mainReducer = combineReducers({
    cart: cartReducer,
    works:bookReducer
  })
  
  const myReduxStore = configureStore({
    reducer: mainReducer,
  })
  
  export default myReduxStore