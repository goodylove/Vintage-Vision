import { configureStore } from '@reduxjs/toolkit';
import sliderRuder from './features/slider/sliderSlice';

export const store = configureStore({
  reducer: {
    slider: sliderRuder,
  },
});
