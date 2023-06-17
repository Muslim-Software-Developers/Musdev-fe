import React, { SVGProps } from "react";

const ArrowLeft = (props: SVGProps<any>) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.44444 12.4778L1 7.03331M1 7.03331L6.44444 1.58887M1 7.03331L15 7.03331"
        stroke="#141414"
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
