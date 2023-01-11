import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { ShoppingCartProvider } from "../Components/context/CartContext";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      {/* TODO: exitBeforEnter */}
      <AnimatePresence>
        <ShoppingCartProvider>
          <Head key={"main"}>
            <title>{`Domino's Pizza`}</title>
          </Head>
          <Component key={"components"} {...pageProps} />
        </ShoppingCartProvider>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
