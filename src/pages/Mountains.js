import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMountain } from "../slices/mountainsSlice";
import { setPageHeader } from "../slices/layoutSlice";

const Mountains = (props) => {
  const mountains = useSelector((state) => state.mountains.mountains);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageHeader("Mountains"));
  }, []);

  return <div></div>;
};

export default Mountains;
