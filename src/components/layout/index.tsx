import React, { ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Footer from "./footer";

interface ILayoutProps {
  title?: string;
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ title, children }: ILayoutProps) => {
  return (
    <section className={inter.className}>
      <Head>
        <title>{title || "Home"}</title>
        <meta name="description" content="Haastrup Mall Limited" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 z-[1] ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;