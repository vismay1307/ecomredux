import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import filterReducer from "./slices/filterSlice";
import recentlyViewedReducer from "./slices/recentlyViewedSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  filters: filterReducer,
  recentlyViewed: recentlyViewedReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "cart",
    "wishlist",
    "filters",
    "recentlyViewed",
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;