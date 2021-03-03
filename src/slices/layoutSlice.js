import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    pageHeader: "Home",
  },
  reducers: {
    setPageHeader: (state, action) => {
      state.pageHeader = action.payload;
    },
  },
});

export const { setPageHeader } = layoutSlice.actions;

export default layoutSlice.reducer;
