import React from "react";
import Link from "next/link";
import Logo from "../../assets/Logo.svg";
import NextImage from "next/image";

interface IAuthLayout {
  children: React.ReactNode;
  heading: string;
  subHeading?: string;
}

const AuthLayout = ({ children, heading, subHeading }: IAuthLayout) => {
  return (
    <section className="pt-40 py-10 px-4">
      <div className="max-w-[592px] mx-auto w-full bg-auth-layout bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center">
        <Link href="/">
          <NextImage src={Logo} alt="Logo" />
        </Link>
        <div className="py-7 text-center">
          <h1 className="text-[#141414] text-3xl font-bold">{heading}</h1>
          <p className="text-[#808080] text-lg pt-3">{subHeading}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
