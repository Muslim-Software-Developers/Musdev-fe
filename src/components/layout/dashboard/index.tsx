import React, { ReactNode } from "react";
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
    <section>
      <Head>
        <title>{title || "Home"}</title>
        <meta name="description" content="Haastrup Mall Limited" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Navbar />
      <section
        className={`z-[1] mt-[95px] bg-[#F0FFFF] section-full-screen ${className}`}
      >
        <Sidebar />
        <main className="">{children}</main>
      </section>
    </section>
  );
};

export default DashboardLayout;
