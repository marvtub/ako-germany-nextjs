import MainCta from "../components/mainCta";
function ProductPriceSection() {
  return (
    <div id="produkt">
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.pexels.com/photos/2479833/pexels-photo-2479833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                {/* <div className="text-rose-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-200">
                    <GiftIcon />                 
                 </div> */}
                <h3 className="text-base text-rose-700 mt-6 font-semibold tracking-wide uppercase">
                  Temperaturüberwachung
                </h3>
                <h3 className="text-4xl mt-2 font-extrabold">
                  Ein Sensor, der für Qualität steht.
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-500">
                Der Temperatur- und Feuchtigkeitslogger mit drahtloser NB-IoT-Konnektivität ermöglicht die automatische Überwachung des Status der Produkte während des Transports und der Lagerung, mit Zugang zu Informationen über unsere Monitoring-Plattform in der Cloud.
                </p>
                <ul className="list-none mt-6 font-bold">
                  <li className="py-1 ">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-rose-700 mr-3"></span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                          Innovative NBioT-Technologie
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-rose-700 mr-3"></span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                          Bis zu 8 Jahre Battielaufzeit
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-rose-700 mr-3"></span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                          Monitoring-Plattform in der Cloud
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-1">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-rose-700 mr-3"></span>
                      </div>
                      <div>
                        <h4 className="text-gray-500">
                          inkl. 2 Jahre Konnektivität
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
                 {/* <div className="mt-8">
                   <p className="text-gray-800 text-sm "><span className="text-2xl font-bold">299 € pro Sensor</span>{' '} zzgl. MwSt.</p>
                   <p className="text-gray-500 text-base">Danach nur 69 € pro Jahr</p>
                 </div> */}
                <div className="mt-8">
                  <MainCta href="#anfragen" cta="Jetzt Anfrage stellen" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPriceSection;
