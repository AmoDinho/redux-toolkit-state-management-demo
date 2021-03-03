import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageHeader } from "./slices/layoutSlice";
import Routes from "./routes";
const App = () => {
  const title = useSelector((state) => state.layout.pageHeader);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div>
      <Routes />
    </div>
  );
};
export default App;
