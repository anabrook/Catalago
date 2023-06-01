"use client";

import "styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

import { AppProps } from "next/app";
import Footer from "components/Footer";
import Head from "next/head";
import Header from "components/Header";
import Providers from "./providers";
import { ReactQueryDevtools } from "react-query/devtools";
import { useMemo } from "react";

//import { Providers } from "./providers";

function App({ Component, pageProps }: AppProps) {
  //const [, setAlert] = useAlert();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: (error) => {
              console.log(error);
              /* setAlert({
                title: "Problema ao carregar os dados",
                description: "Tente novamente",
                type: "error",
                open: true,
                hideCancel: true,
              }); */
            },
          },
        },
      }),
    []
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Teste front end Blocks" />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        {/* Aqui tem um header geral da aplicação */}
        <Providers>
          {/* Aqui tem um header geral da aplicação */}
          <Header />
          {/* Esse Component o next utiliza para carregar as várias telas da sua aplicação */}
          <Component {...pageProps} />
          <Footer />
        </Providers>
      </QueryClientProvider>
    </>
  );
}

export default App;
