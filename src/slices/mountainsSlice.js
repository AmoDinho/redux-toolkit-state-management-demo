import { createSlice } from "@reduxjs/toolkit";
import { addNewMountain } from "../reducers/mountainsRedcuers";
export const mountainsSlice = createSlice({
  name: "mountains",
  initialState: {
    mountains: ["Kasteelspoort", "Jonkershoek", "Mont Rochelle"],
  },
  reducers: {
    addMountain: (state, action) => addNewMountain(state, action),
  },
});

export const { addMountain } = mountainsSlice.actions;
export default mountainsSlice.reducer;
