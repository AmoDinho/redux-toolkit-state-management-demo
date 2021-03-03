import { createSlice } from "@reduxjs/toolkit";
import { setNewTitle } from "../reducers/layoutReducers";
export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    pageHeader: "Page",
  },
  reducers: {
    setPageHeader: (state, action) => setNewTitle(state, action),
  },
});

export const { setPageHeader } = layoutSlice.actions;

export default layoutSlice.reducer;
