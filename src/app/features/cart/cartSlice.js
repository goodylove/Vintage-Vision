import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: JSON.parse(sessionStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const productId = action.payload;

      const exist = state.cartItem.find((item) => item.id === productId.id);
      console.log(exist);
      if (exist) {
        exist.quantity += productId.quantity;
        exist.price += productId.price;
      } else {
        state.cartItem.push(exist);
        sessionStorage.setItem('cart', JSON.stringify(exist));
      }
    },
  },
});
export default cartSlice.reducer;
export const { addItemsToCart } = cartSlice.actions;
