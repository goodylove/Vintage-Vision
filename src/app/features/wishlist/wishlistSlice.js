import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: {
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

      const wishListExist = state.wishList.wish.find(
        (product) => (product.id = productId.id)
      );
      if (wishListExist) {
        state.wishList.exist = true;
      } else {
        state.wishList.wish.push({
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
  },
});
export default wishListSlice.reducer;
export const { addToWishList } = wishListSlice.actions;
