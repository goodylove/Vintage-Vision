import { configureStore } from '@reduxjs/toolkit';
import sliderRuder from './features/slider/sliderSlice';
import loginReducer from './features/login/loginSlice';

export const store = configureStore({
  reducer: {
    slider: sliderRuder,
    login: loginReducer,
  },
});
