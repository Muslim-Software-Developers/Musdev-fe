import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

interface ILayoutProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ title, children, className }: ILayoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title || "Home"}</title>
        <meta name="description" content="Musdev Website" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <main className={`section-full-screen mt-[95px] z-[1] ${className}`}>
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
