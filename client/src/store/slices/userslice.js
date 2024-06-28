import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  error: null,
  loading: false,
  currentUser: null,
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
      return state;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
      return state;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;

      state.loading = false;
      return state;
    },
  },
});

export const { signInFailure, signInStart, signInSuccess } = userSlice.actions;

export default userSlice.reducer;
