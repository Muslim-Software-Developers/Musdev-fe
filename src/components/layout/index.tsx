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
  {/* Primary SEO - Establishing Authority */}
  <title>Muslim In Tech (MusDev) | #1 Muslim Tech Community in Nigeria</title>
  <meta name="title" content="Muslim In Tech (MusDev) | Nigeria's #1 Muslim Tech Community" />
  <meta name="description" content="The premier hub for Muslim tech professionals in Nigeria. Empowering developers, designers, and innovators through community, mentorship, and faith-driven excellence. Join the MusDev movement." />
  
  {/* Technical Essentials */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="MusDev Nigeria" />

  {/* Open Graph / Facebook (Social Sharing Pride) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://musdev.org/" />
  <meta property="og:title" content="Muslim In Tech (MusDev) | Nigeria's #1 Muslim Tech Community" />
  <meta property="og:description" content="Bridging faith and innovation. Join thousands of Muslim techies across Nigeria building the future together." />
  {/* Using your new Logo.PNG for the social share preview */}
  <meta property="og:image" content="https://musdev.org/images/Logo.PNG" />

  {/* Twitter (X) Card */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://musdev.org/" />
  <meta property="twitter:title" content="Muslim In Tech (MusDev) | #1 Muslim Tech Community in Nigeria" />
  <meta property="twitter:description" content="Empowering the next generation of Muslim tech leaders. Community, Growth, and Impact." />
  <meta property="twitter:image" content="https://musdev.org/images/Logo.PNG" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
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
