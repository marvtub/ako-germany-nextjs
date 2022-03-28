import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { initGA } from "../components/ga-utils";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  //Cookie Consent Funktionalität
  function handleAcceptCookie(){
    // console.log("Trying to GA initialize!" + " . " + process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)

    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
      console.log("GA initialized!")
    }
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Component {...pageProps} />
      <CookieConsent
        key="cookie-banner"
        location="bottom"
        buttonText="Alle akzeptieren"
        cookieName="ako-germany-cookie"
        style={{ background: "rgb(27 25 23)" }}
        buttonStyle={{ color: "rgb(248 250 252)", backgroundColor: "#007900", borderRadius:"5px", padding: "10px 20px"}}
        expires={150}
        declineButtonText="Nur notwendige akzeptieren"
        declineButtonStyle={{ color: "rgb(190 18 60)", backgroundColor:"rgb(255 228 230 / 0%)",borderRadius:"5px", padding: "10px 20px"}}
        enableDeclineButton
        onDecline={() => {
          handleDeclineCookie;
        }}
        onAccept={() => {
          handleAcceptCookie();
          console.log("initGA!" )
        }}
      >
        Um unsere Webseite für Sie optimal zu gestalten und fortlaufend
        verbessern zu können, verwenden wir Cookies.{" "}
      </CookieConsent>
    </AnimatePresence>
  );
}

export default MyApp;
