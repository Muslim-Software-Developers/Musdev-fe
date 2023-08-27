import React, { SVGProps } from "react";

const ArrowDown = (props: SVGProps<any>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      {...props}
    >
      <path
        opacity="0.6"
        d="M1.56641 1.5L6.56641 6.5L11.5664 1.5"
        stroke="#808080"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
