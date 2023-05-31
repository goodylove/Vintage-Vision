import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(sessionStorage.getItem('user')) || {
    name: '',
    password: '',
    img: '',
    authUser: false,
  },
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    AddUser: (state, action) => {
      let userId = action.payload;
      const validateEmail = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(
        userId.password
      );
      let newUser = { ...state, user: (state.user = userId) };
      if (!validateEmail) {
        newUser.user.authUser = false;
      } else {
        newUser.user.authUser = true;
        sessionStorage.setItem('user', JSON.stringify(userId));
      }
    },
  },
});

export default LoginSlice.reducer;
export const { AddUser } = LoginSlice.actions;
