import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userslice.js";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
