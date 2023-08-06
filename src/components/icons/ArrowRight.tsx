const ArrowRight = ({stroke1, stroke2}:any) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.99967 14.6665C12.6243 14.6665 14.1663 13.1245 14.1663 8.49984C14.1663 3.87517 12.6243 2.33317 7.99967 2.33317C3.37501 2.33317 1.83301 3.87517 1.83301 8.49984C1.83301 13.1245 3.37501 14.6665 7.99967 14.6665Z"
        stroke={stroke1}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.03809 10.8145C7.03809 10.8145 9.36209 9.21979 9.36209 8.49979C9.36209 7.77979 7.03809 6.18645 7.03809 6.18645"
        stroke={stroke2}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
