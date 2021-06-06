import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../slices/layoutSlice";
import HeadingOne from "../components/HeadingOne";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageHeader("index"));
  }, []);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the root of the app. Above is the header that is controlled by
        Redux .
      </HeadingOne>
    </>
  );
};

export default Index;
