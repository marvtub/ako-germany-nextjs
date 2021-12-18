import Script from "next/script";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

function AnfrageSection() {
  return (
    <div id="anfragen">
                      <Script src="https://webforms.pipedrive.com/f/loader"></Script>

      <div id="kontakt">
        <section className="relative py-20 bg-slate-100">
          <div className="container mx-auto  px-4">
            <div className="items-top flex flex-wrap">
              <div className="md:w-6/12 ml-auto mr-auto lg:ml-0 px-4 pb-10">
                <div className="md:pr-12">
                  {/* <div className="text-rose-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-200">
                    <GiftIcon />                 
                 </div> */}
                  <h3 className="text-base text-rose-700 mt-6 font-semibold tracking-wide uppercase">
                    Kontakt
                  </h3>
                  <h3 className="text-4xl mt-2 font-semibold">
                    Schicken Sie Uns <br /> Ihre Anfrage{" "}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-500">
                    Tempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                    <a href="mailto:anfrage@ako-germany.de">

                      <div className="flex items-center">
                        <div>
                          <span className=" font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-rose-700 mr-3">
                            <MailIcon
                              width={18}
                              height={18}
                              className="text-white"
                            />
                          </span>
                        </div>
                        <div>
                          <h5 className="text-gray-500">
                            anfrage@ako-germany.de{" "}
                          </h5>
                        </div>
                      </div>
                      </a>
                    </li>
                    <li className="py-2">
                        <a href="tel:16546561">
                      <div className="flex items-center">
                        <div>
                          <span className=" font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-rose-700 mr-3">
                          <PhoneIcon
                              width={18}
                              height={18}
                              className="text-white"
                            />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            030 - 79846544
                          </h4>
                        </div>
                      </div>
                          </a>
                    </li>
                    
                  </ul>
                 </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 ">
                <div
                  className="pipedriveWebForms"
                  data-pd-webforms="https://webforms.pipedrive.com/f/1FSnGnvBmskV2d9ta3bA1lJb0Ypegm4EvBHx1sWy2pt9OsVHaRNXL7DCBOADPfvFN"
                >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AnfrageSection;
