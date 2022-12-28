import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      {/* TODO: exitBeforEnter */}
      <AnimatePresence>
        <Head key={"main"}>
          <title>{`Domino's Pizza`}</title>
        </Head>
        <Component key={"components"} {...pageProps} />;
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
