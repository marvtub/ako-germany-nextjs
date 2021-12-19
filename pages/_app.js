import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence } from "framer-motion";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
