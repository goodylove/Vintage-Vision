import { configureStore } from '@reduxjs/toolkit';
import sliderRuder from './features/slider/sliderSlice';
import loginReducer from './features/login/loginSlice';
import productReducer from './features/filterProduct/filterproductSlice';
import cartReducer from './features/cart/cartSlice';
import wishReducer from './features/wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    slider: sliderRuder,
    login: loginReducer,
    product: productReducer,
    cart: cartReducer,
    wishList: wishReducer,
  },
});
