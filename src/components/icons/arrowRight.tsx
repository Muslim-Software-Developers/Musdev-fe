import React, { SVGProps } from "react";

const ArrowRight = (props: SVGProps<any>) => {
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
        d="M9.55556 1.58887L15 7.03331M15 7.03331L9.55555 12.4778M15 7.03331L1 7.03331"
        stroke="#141414"
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
