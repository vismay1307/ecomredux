import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  search: string;
  sortBy: "price" | "rating" | "default";
  sortOrder: "asc" | "desc";
  minPrice: number;
  maxPrice: number;
}

const initialState: FilterState = {
  category: "all",
  search: "",
  sortBy: "default",
  sortOrder: "asc",
  minPrice: 0,
  maxPrice: 1000,
};

const filterSlice = createSlice({
  name: "filters",

  initialState,

  reducers: {
    setCategory: (
      state,
      action: PayloadAction<string>
    ) => {
      state.category = action.payload;
    },

    setSearch: (
      state,
      action: PayloadAction<string>
    ) => {
      state.search = action.payload;
    },

    setSort: (
      state,
      action: PayloadAction<{
        sortBy: FilterState["sortBy"];
        sortOrder: FilterState["sortOrder"];
      }>
    ) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },

    setPriceRange: (
      state,
      action: PayloadAction<{
        minPrice: number;
        maxPrice: number;
      }>
    ) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },

    resetFilters: (state) => {
      state.category = "all";
      state.search = "";
      state.sortBy = "default";
      state.sortOrder = "asc";
      state.minPrice = 0;
      state.maxPrice = 1000;
    },
  },
});

export const {
  setCategory,
  setSearch,
  setSort,
  setPriceRange,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;