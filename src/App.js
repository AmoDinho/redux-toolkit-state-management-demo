import React from "react";
import { useSelector } from "react-redux";
import Routes from "./routes";
const App = () => {
  const title = useSelector((state) => state.layout.pageHeader);

  return (
    <div className="text-center">
      {title}
      <Routes />
    </div>
  );
};
export default App;
