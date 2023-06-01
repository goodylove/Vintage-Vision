import { createSlice } from '@reduxjs/toolkit';
import { storeData } from './../../../data/dummudata';

const initialState = {
  products: JSON.parse(sessionStorage.getItem('product')) || storeData,
};

const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    pageProduct: (state, action) => {
      const produtName = action.payload;

      const filteredProductByName = storeData.filter(
        (product) => product.name === produtName
      );
      state.products = filteredProductByName;
      sessionStorage.setItem('product', JSON.stringify(filteredProductByName));
    },
  },
});

export default productSlice.reducer;
export const { pageProduct } = productSlice.actions;
