import Script from "next/script";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { useEffect, useState, useRef } from "react";
import CustomForm from "../components/customForm";

function AnfrageSection({ api_key }) {
  // const script_form = (
  //   <Script
  //     id={Date.now()}
  //     src="https://webforms.pipedrive.com/f/loader"
  //   ></Script>
  // );
  // const form_div = (
  //   <div
  //     key={Date.now()}
  //     className="pipedriveWebForms"
  //     data-pd-webforms="https://webforms.pipedrive.com/f/1FSnGnvBmskV2d9ta3bA1lJb0Ypegm4EvBHx1sWy2pt9OsVHaRNXL7DCBOADPfvFN"
  //   ></div>
  // );

  // const [formLoader, setFormLoader] = useState(script_form);
  // const [form, setForm] = useState(form_div);

  // useEffect(() => {
  //   setFormLoader(script_form);
  //   setForm(form_div);
  //   console.log("RERENDER");
  // }, []);

  return (
    <div id="anfragen">
      {/* {formLoader} */}
      <div id="kontakt">
        <section className="relative py-20 bg-slate-100">
          <div className="container mx-auto  px-4">
            <div className="items-top flex flex-wrap">
              <div className="md:w-6/12 mx-auto lg:ml-0  pb-10">
                <div className="md:pr-12">
                  {/* <div className="text-rose-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-200">
                    <GiftIcon />                 
                 </div> */}
                  <h3 className="text-base text-rose-700 mt-6 font-semibold tracking-wide uppercase">
                    Kontakt
                  </h3>
                  <h3 className="text-4xl mt-2 font-extrabold">
                    Schicken Sie Uns <br /> Ihre Anfrage{" "}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-500">
                    Füllen Sie gerne das Formular aus & wir setzen uns zeitnah
                    mit Ihnen in Verbindung. Alternativ können Sie uns auch über
                    folgende Kontaktdaten erreichen:{" "}
                  </p>
                  <ul className="list-none mt-6 px-4">
                    <li className="py-2">
                      <a href="mailto:sales@ako-germany.de">
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
                          <h3 className="text-gray-800 text-lg font-medium">E-Mail</h3>

                            <h4 className="text-gray-500">
                              sales@ako-germany.de{" "}
                            </h4>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="tel:03362 8891619">
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
                          <h3 className="text-gray-800 text-lg font-medium">Telefon</h3>
                            <h4 className="text-gray-500">03362 8891619</h4>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-0 ">
                
                <CustomForm api_key={api_key} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AnfrageSection;
