import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: JSON.parse(sessionStorage.getItem('cart')) ?? [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const productId = action.payload;

      const exist = state.cartItem.find((item) => item.id === productId.id);

      if (exist) {
        exist.quantity++;
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
        console.log(state.cartItem);
        sessionStorage.setItem('cart', JSON.stringify(state.cartItem));
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const currentQuantity = state.cartItem.find(
        (item) => item.id === productId.id
      );
      currentQuantity.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const currentQuantity = state.cartItem.find(
        (item) => item.id === productId.id
      );
      if (currentQuantity.quantity === 1) {
        currentQuantity.quantity = 1;
      } else {
        currentQuantity.quantity--;
      }
    },

    removeItemFromCart: (state, action) => {
      const productId = action.payload;
      const cartItems = state.cartItem.find((item) => item.id === productId.id);
      if (cartItems.quantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== productId.id
        );
      } else {
        cartItems.quantity--;
      }
    },
  },
});
export default cartSlice.reducer;
export const {
  addItemsToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} = cartSlice.actions;
