import type { AppProps } from "next/app";
import { ToastContainer as Toast } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "@/components/layout";
import DashboardLayout from "@/components/layout/dashboard";
import { AppPropsWithLayout } from "@/utils/types";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const { isAuthPage = false, name, title } = Component;

  console.log('opened page...')

  const router = useRouter();

  const ToastContainer = (
    <Toast
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

  let page = (
    <Layout title={title || name} className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );

  if (router.pathname.startsWith("/app")) {
    page = (
      <DashboardLayout title={title || name} className={inter.className}>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        {ToastContainer}
        {page}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
}
