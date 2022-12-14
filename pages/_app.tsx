import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (<>
  <Head>
    <title>Api Hub</title>
  </Head>
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </>
  );
}
