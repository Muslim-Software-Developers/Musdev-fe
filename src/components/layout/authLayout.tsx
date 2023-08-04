import React from "react";
import Link from "next/link";
import Logo from "../../assets/Logo.png";
import NextImage from "next/image";

interface IAuthLayout {
  children: React.ReactNode;
  heading: string;
  subHeading?: string;
}

const AuthLayout = ({ children, heading, subHeading }: IAuthLayout) => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="bg-auth-layout bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center">
        <Link href="/">
          <NextImage src={Logo} alt="Logo" />
        </Link>
        <div className="py-7 text-center">
          <h1 className="text-[#141414] leading-[48px] text-[40px] font-bold">
            {heading}
          </h1>
          <p className="text-[#808080] text-[18px] leading-[28px] pt-3">
            {subHeading}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
