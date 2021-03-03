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

  return (
    <div className="grid  grid-rows-2 place-items-center">
      <div>
        <input
          className="border border-pink-500 "
          onChange={(e) => setMountainName(e.currentTarget.value)}
        />
        <button
          className="rounded-lg bg-red-600 px-2 py-2 ml-3 text-red-200 "
          onClick={() => props.addNewMountain(mountainName)}
        >
          Add mountain
        </button>
      </div>

      <div className="flex flex-col">
        {mountains.map((mountain, idx) => (
          <p key={idx}>{mountain}</p>
        ))}
      </div>
    </div>
  );
};

export default Mountains;
