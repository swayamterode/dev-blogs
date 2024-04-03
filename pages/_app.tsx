import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
