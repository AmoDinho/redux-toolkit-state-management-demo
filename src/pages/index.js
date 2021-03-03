import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../slices/layoutSlice";
import HeadingOne from "../components/HeadingOne";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageHeader("Home"));
  }, []);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>
    </>
  );
};

export default Index;
