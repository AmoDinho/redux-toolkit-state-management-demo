import { createSlice } from "@reduxjs/toolkit";

export const mountainsSlice = createSlice({
  name: "mountains",
  initialState: {
    mountains: ["Kasteelspoort", "Jonkershoek", "Mont Rochelle"],
  },
  reducers: {},
});
