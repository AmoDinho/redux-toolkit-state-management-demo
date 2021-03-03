import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/index";
import Mountains from "./pages/Mountains";
const Routes = ({ props }) => {
  return (
    <Router>
      <Home path="/" props={props} />
      <Mountains path="/mountains" props={props} />
    </Router>
  );
};

export default Routes;
