import Head from "next/head";
import FeaturesSection from "../components/featuresSection";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SpecSection from "../components/specSection";
import ProductPriceSections from "../components/productPriceSection";
import AboutUsSection from "../components/aboutUsSection"
import CustomerLogoSection from "../components/customerLogoSection"
import AnfrageSection from "../components/anfrageSection";




export default function Home() {

  return (
    <div className="" >
      <Head>
        <title>AKO Germany | Temperaturüberwachung leicht gemacht</title>
        <meta name="description" content="AKO Germany bietet erstklassige Technologien zur automatischen Überwachung von Produkten während der Lagerung und des Transports." />
        <link rel="icon" href="/AKO-Germany-icon.png" sizes="32x32" />
      </Head>
      <Hero />
      <CustomerLogoSection />
      <FeaturesSection />
      <ProductPriceSections />
      <SpecSection />
      <AnfrageSection />
      {/* <AboutUsSection /> */}
      <Footer />
    </div>
  );
}
