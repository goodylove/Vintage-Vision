import { createSlice } from '@reduxjs/toolkit';
import { sliderData } from '../../../data/dummudata';

const initialState = {
  value: 0,
  length: sliderData.length,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    activateSlider: (state, action) => {
      const newState = { ...state, value: (state.value = action.payload) };
      // console.log(newState);
      // newState.value = action.payload;
      // [...state, { value: action.payload }];
    },
  },
});

export default sliderSlice.reducer;
export const { activateSlider } = sliderSlice.actions;
