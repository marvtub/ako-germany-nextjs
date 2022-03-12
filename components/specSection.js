import React, { useState } from "react";

function SpecSection() {
  const features = [
    { name: "Temepratur-Messbereich", description: "-40°C bis 50°C" },
    {
      name: "Energie",
      description: "Batterie LiSOCI2,3.6 Vdc,6.5 Ah,  Hält bis zu 8 Jahren",
    },
    { name: "Dimensionen", description: "107 mm x 85 mm x 39 mm" },
    {
      name: "Funktechnologie",
      description: "NBioT Band 20",
    },
    {
      name: "Paketinhalt",
      description:
        "1x AKO Sensor inkl. Batterie, 2x Dübel, Bedienungsanleitung",
    },
    {
      name: "Titel",
      description: " Basic ",
    },
    {
      name: "Bezeichnung",
      description: "AKO-59810",
    },
  ];

  const features2 = [
    { name: "Temepratur-Messbereich", description: "-40°C bis 50°C" },
    {
      name: "Energie",
      description: "Batterie LiSOCI2,3.6 Vdc,6.5 Ah,  Hält bis zu 8 Jahren",
    },
    { name: "Dimensionen", description: "107 mm x 85 mm x 39 mm" },
    {
      name: "Funktechnologie",
      description: "NBioT Band 20 mit externer Antenne",
    },
    {
      name: "Paketinhalt",
      description:
        "1x AKO Sensor inkl. Batterie, 2x Dübel, Bedienungsanleitung & externer Antenne",
    },
    {
      name: "Titel",
      description: " Ultra Range ",
    },
    {
      name: "Bezeichnung",
      description: "AKO 59811",
    },
  ];
  const features3 = [
    { name: "Temepratur-Messbereich", description: "-40°C bis 50°C mit externer Sonde" },
    {
      name: "Energie",
      description: "Batterie LiSOCI2,3.6 Vdc,6.5 Ah,  Hält bis zu 8 Jahren",
    },
    { name: "Dimensionen", description: "107 mm x 85 mm x 39 mm" },
    {
      name: "Funktechnologie",
      description: "NBioT Band 20",
    },
    {
      name: "Paketinhalt",
      description:
        "1x AKO Sensor inkl. Batterie, 2x Dübel, Bedienungsanleitung & 3 Meter Sonde",
    },
    {
      name: "Titel",
      description: " Extra Sensor ",
    },
    {
      name: "Bezeichnung",
      description: "AKO 59820",
    },
  ];
  const features4 = [
    {
      name: "Temepratur-Messbereich",
      description: "-40°C bis 50°C mit externer Sonde",
    },
    {
      name: "Energie",
      description: "Batterie LiSOCI2,3.6 Vdc,6.5 Ah,  Hält bis zu 8 Jahren",
    },
    { name: "Dimensionen", description: "107 mm x 85 mm x 39 mm" },
    {
      name: "Funktechnologie",
      description: "NBioT Band 20 mit externer Antenne",
    },
    {
      name: "Paketinhalt",
      description:
        "1x AKO Sensor inkl. Batterie, 2x Dübel, Bedienungsanleitung, 3 Meter Sonde & externer Antenne",
    },
    {
      name: "Titel",
      description: " Range + Extra Sensor ",
    },
    {
      name: "Bezeichnung",
      description: "AKO-59821",
    },
  ];
  const features5 = [
    { name: "Temepratur-Messbereich", description: "-100°C bis 200°C mit externer Sonde" },
    {
      name: "Energie",
      description: "Batterie LiSOCI2,3.6 Vdc,6.5 Ah,  Hält bis zu 8 Jahren",
    },
    { name: "Dimensionen", description: "107 mm x 85 mm x 39 mm" },
    {
      name: "Funktechnologie",
      description: "NBioT Band 20",
    },
    {
      name: "Paketinhalt",
      description:
        "1x AKO Sensor inkl. Batterie, 2x Dübel, Bedienungsanleitung & externer Antenne",
    },
    {
      name: "Titel",
      description: " Extreme ",
    },
    {
      name: "Bezeichnung",
      description: "AKO-59840",
    },
  ];
  

  const specs = [features, features2, features3, features4, features5]

  const productImages = [
    {
      path: "/AKO-59810.jpg",
    },
    {
      path: "/AKO-59811.jpg",
    },
    {
      path: "/AKO-59820.jpg",
    },
    {
      path: "/AKO-59821.jpg",
    },
    {
      path: "/AKO-59840.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [currProduct, setCurrProduct] = useState(features);
  const [currProductImage, setCurrProductImage] = useState(
    productImages[0].path
  );

  return (
    <div>
      <div className="bg-gray-0">
        <div className="container mx-auto ">
          <div className="  py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base text-rose-700 mt-6 font-semibold tracking-wide uppercase">
                {currProduct[5].description}
              </h3>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Spezifikationen
              </h2>
              <p className="mt-4 text-gray-500">
                Der Temperatur- und Feuchtigkeitslogger mit drahtloser
                NB-IoT-Konnektivität & Schutzklasse IP68 ermöglicht die automatische Überwachung des
                Status der Produkte während des Transports und der Lagerung, mit
                Zugang zu Informationen über unsere Monitoring-Plattform in der
                Cloud.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {currProduct.map((feature) =>
                  feature.name === "Titel" ? null : (
                    <div
                      key={feature.name}
                      className="border-t border-gray-200 pt-4"
                    >
                      <dt className="font-medium text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-sm text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  )
                )}
              </dl>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 relative h-max">
              {/* <img
              src="https://www.ako.com/wp-content/webp-express/webp-images/uploads/2020/07/TODOS.jpg.webp"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            /> */}
            

              {/* NEW TAB SECTION --> 5-Grid */}
              <div className="grid-container flex gap-0.5 flex-wrap text-white text-center mx-2">

                 { specs.map(prod => (

                <div key={prod[5].description}
                  className={`tab flex-1 bg-rose-700 border-solid cursor-pointer border-2 border-rose-700 flex align-center items-center justify-center font-semibold py-4 px-8 m-px hover:bg-slate-50 transition duration-300 rounded-md
                  ${
                    activeTab === specs.indexOf(prod)+1
                      ? "text-rose-700 bg-white"
                      : "text-white bg-rose-700 hover:text-rose-700 "
                  } 
                  ${prod[5].description === " Range + Extra Sensor " ? "order-last" : ""}
                  `}
                  tabIndex={0}
                  type="button"
                  onClick={() => {
                    setCurrProduct(prod);
                    setCurrProductImage(productImages[specs.indexOf(prod)].path);
                    setActiveTab(specs.indexOf(prod)+1);
                  }}
                >
                  <p><nobr>{prod[5].description}</nobr></p>
                </div>

                 )) }
                </div>
            
                

              {/* NEW TAB SECTION --> 5-Grid */}
              <img
                src={currProductImage}
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="bg-gray-100 rounded-lg w-8/12 h-md mx-auto"
              />
              {/* <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            /> */}
              {/* <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecSection;
