import ReactGA from "react-ga4";

export const initGA = (id) => {

//   if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(id);
    ReactGA.set({ anonymizeIp: true });
    ReactGA.send("pageview");

  
};