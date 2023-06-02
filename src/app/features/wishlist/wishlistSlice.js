import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishLists: {
    wish: [],
    exist: false,
  },
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const productId = action.payload;

      const wishListExist = state.wishLists.wish.find(
        (product) => product.id === productId.id
      );
      if (wishListExist) {
        state.wishLists.exist = true;
      } else {
        state.wishLists.wish.push({
          id: productId.id,
          quantity: productId.quantity,
          name: productId.name,
          price: productId.price,
          type: productId.type,
          title: productId.title,
          text: productId.text,
          img: productId.img,
        });
      }
    },
    removeWishlist: (state, action) => {
      const productId = action.payload;
      const wishExist = state.wishLists.wish.find(
        (item) => item.id === productId.id
      );
      if (wishExist) {
        state.wishLists.wish = state.wishLists.wish.filter(
          (wish) => wish.id !== productId.id
        );
      }
    },
  },
});
export default wishListSlice.reducer;
export const { addToWishList, removeWishlist } = wishListSlice.actions;
