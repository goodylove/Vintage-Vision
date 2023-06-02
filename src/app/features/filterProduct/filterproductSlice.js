import { createSlice } from '@reduxjs/toolkit';
import { storeData } from './../../../data/dummudata';

const initialState = {
  products: JSON.parse(sessionStorage.getItem('product')) || storeData,
  singleProducts: JSON.parse(sessionStorage.getItem('single')) || storeData,
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
    productType: (state, action) => {
      const productType = action.payload;

      const filteredProductType = JSON.parse(sessionStorage.getItem('product'));
      let producttype = filteredProductType.filter(
        (product) => product.type === productType
      );
      state.products = producttype;
    },
    singleProduct: (state, action) => {
      const productId = action.payload;
      const singleProductItem = storeData.find(
        (product) => product.id === productId.id
      );
      const newState = {
        ...state.singleProducts,
        singleProducts: (state.singleProducts = singleProductItem),
      };
      // console.log(newState);
      sessionStorage.setItem('single', JSON.stringify(singleProductItem));
    },
  },
});

export default productSlice.reducer;
export const { pageProduct, productType, singleProduct } = productSlice.actions;
