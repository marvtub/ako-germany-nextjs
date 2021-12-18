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
      name: "Bezeichnung",
      description: "AKO-59810 ",
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
      description: "NBioT Band 20",
    },
    {
      name: "Paketinhalt",
      description:
        "1x AKO Sensor inkl. Batterie, 2x Dübel, Bedienungsanleitung",
    },
    {
      name: "Bezeichnung",
      description: "AKO2",
    },
  ];
  const features3 = [
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
      name: "Bezeichnung",
      description: "AKO3",
    },
  ];

  const productImages = [
    {
      path: "https://www.ako.com/wp-content/webp-express/webp-images/uploads/2020/07/AKO-59810x-e1594988847597.jpg.webp",
    },
    {
      path: "https://www.ako.com/wp-content/webp-express/webp-images/uploads/2020/07/AKO-59840-e1594962597156.png.webp",
    },
    {
      path: "https://www.ako.com/wp-content/webp-express/webp-images/uploads/2020/07/AKO-59810x-tampografia-clima-min-e1594988810886.jpg.webp",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [currProduct, setCurrProduct] = useState(features);
  const [currProductImage, setCurrProductImage] = useState(productImages[0].path);

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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {currProduct.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            {/* <img
              src="https://www.ako.com/wp-content/webp-express/webp-images/uploads/2020/07/TODOS.jpg.webp"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            /> */}
            {/* Tab Section */}
            <div className="p-0.5 mb-4  ml-4 mr-4 flex bg-gray-300 rounded-full">
              
              <div
                tabIndex={0}
                className={`border-solid w-4/12 text-center p-3  font-semibold text-base  hover:bg-slate-50 transition duration-300 border-gray-200 cursor-pointer rounded-l-full ${activeTab === 1 ? 'text-rose-700 bg-white' : 'text-white bg-rose-700 hover:text-rose-900'}`}
                type="button"
                onClick={() => {
                  setCurrProduct(features);
                  setCurrProductImage(productImages[0].path);
                  setActiveTab(1);
                }}
                id={features[5].description}
              >
                {features[5].description}
              </div>
              <div
                tabIndex={0}
                className={`border-solid w-4/12 text-center p-3  font-semibold text-base  hover:bg-slate-50 transition duration-300 border-gray-200 cursor-pointer  ${activeTab === 2 ? 'text-rose-700 bg-white' : 'text-white bg-rose-700 hover:text-rose-900'}`}
                type="button"
                onClick={() => {
                  setCurrProduct(features2);
                  setCurrProductImage(productImages[1].path);
                  setActiveTab(2);
                }}
                id={features2[5].description}
              >
                {features2[5].description}
              </div>
              <div
                tabIndex={0}
                className={`border-solid w-4/12 text-center p-3  font-semibold text-base  hover:bg-slate-50 transition duration-300 border-gray-200 cursor-pointer rounded-r-full ${activeTab === 3 ? 'text-rose-700 bg-white' : 'text-white bg-rose-700 hover:text-rose-900'}`}
                type="button"
                onClick={() => {
                  setCurrProduct(features3);
                  setCurrProductImage(productImages[2].path);
                  setActiveTab(3);
                }}
                id={features3[5].description}
              >
                {features3[5].description}
              </div>
            </div>
            {/* Tab Section */}
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
