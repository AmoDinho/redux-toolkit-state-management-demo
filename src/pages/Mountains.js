import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMountain } from "../slices/mountainsSlice";

const Mountains = (props) => {
  const mountains = useSelector((state) => state.mountains.mountains);
  const dispatch = useDispatch();
  return <div></div>;
};

export default Mountains;
