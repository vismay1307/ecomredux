import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/lib/types";

interface RecentlyViewedState {
  items: Product[];
}

const initialState: RecentlyViewedState = {
  items: [],
};

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",

  initialState,

  reducers: {
    addRecentlyViewed: (
      state,
      action: PayloadAction<Product>
    ) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items.unshift(action.payload);

      if (state.items.length > 6) {
        state.items.pop();
      }
    },

    clearRecentlyViewed: (state) => {
      state.items = [];
    },
  },
});

export const {
  addRecentlyViewed,
  clearRecentlyViewed,
} = recentlyViewedSlice.actions;

export default recentlyViewedSlice.reducer;