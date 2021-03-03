import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slices/layoutSlice";
export default configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
