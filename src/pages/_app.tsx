import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <AnimatePresence>
        <Component {...pageProps} />;
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default MyApp;
