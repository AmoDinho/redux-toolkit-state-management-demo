import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slices/layoutSlice";
import mountainsReducer from "./slices/mountainsSlice";
export default configureStore({
  reducer: {
    layout: layoutReducer,
    mountain: mountainsReducer,
  },
});
