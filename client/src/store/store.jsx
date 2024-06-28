import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userSlice from "./slices/userslice.js";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  userSlice,
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
