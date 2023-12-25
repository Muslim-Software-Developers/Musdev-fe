import React, { Fragment, ReactNode } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../navbar";
import Sidebar from "./sidebar";

interface IDashboardLayoutProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({
  title,
  children,
  className,
}: IDashboardLayoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title || "Home"}</title>
        <meta name="description" content="Haastrup Mall Limited" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <section
        className={`z-[1] mt-[95px] bg-[#F0FFFF] section-full-screen ${className} w-50px]`}
      >
        <Sidebar />
        <main className="ml-[0px] m-[0px] p-[0px] lg:ml-[300px] bg-[#F0FFFF]">
          {children}
        </main>
      </section>
    </Fragment>
  );
};

export default DashboardLayout;
