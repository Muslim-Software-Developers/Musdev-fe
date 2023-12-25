import React from "react";
import Spinner from "../spinner";

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px] text-black">
      <Spinner className="text-black" />
    </div>
  );
};
