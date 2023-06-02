import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const productId = action.payload;

      const exist = state.cartItem.find((item) => item.id === productId.id);

      if (exist) {
        exist.quantity += productId.quantity;
        exist.price += productId.price;
      } else {
        const newItem = {
          id: productId.id,
          quantity: productId.quantity,
          name: productId.name,
          price: productId.price,
          type: productId.type,
          title: productId.title,
          text: productId.text,
          img: productId.img,
        };
        state.cartItem.push(newItem);

        // sessionStorage.setItem('cart', JSON.stringify());
      }
    },
  },
});
export default cartSlice.reducer;
export const { addItemsToCart } = cartSlice.actions;
