import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: { // app's big reducer
        cart: cartReducer, // slice
        // user:userReducer // slice
    }
});

export default appStore;