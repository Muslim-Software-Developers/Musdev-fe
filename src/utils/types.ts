import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
  isAuthPage?: boolean;
  ignoreAuthLayout?: boolean;
  title?: string;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
