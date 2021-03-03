import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    pageHeader: "",
  },
  reducers: {
    setPageHeader: (state, action) => {
      state.pageHeader = action.payload;
    },
  },
});
