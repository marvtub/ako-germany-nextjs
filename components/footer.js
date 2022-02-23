import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  const nLinks = [
    // { name: "Über Uns", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Produkt", href: "/#produkt" },
  ];

  const rLinks = [
    { name: "Impressum", href: "https://www.ako.com/legal/", ext: true },
    // {name: "AGB's", href: "/agb", ext: true},
    { name: "Datenschutz", href: "https://www.ako.com/privacy/", ext: true },
    { name: "Kontakt", href: "/#kontakt" },
  ];

  return (
    <footer className="relative bg-stone-900 pt-8 pb-6">
      <div className="container max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-rose-600">
              Finden Sie uns auf Social Media!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-rose-700">
              Sie finden uns aktuell auf LinkedIn. Wir freuen uns auf Sie.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a
                href="https://www.linkedin.com/company/akogroup/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button
                  className=" text-rose-800 hover:text-white hover:border-white transition duration-300 eas-in-out border-solid border-2 border-rose-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </button>
              </a>
              {/* <button className=" text-rose-800 hover:text-white hover:border-white transition duration-300 eas-in-out border-solid border-2 border-rose-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none mr-2" type="button">
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </button> */}
            </div>
            <div className="anuga-tec text-sm flex  items-center space-x-8 text-rose-600 font-semibold mt-8">
            <a href="https://www.anugafoodtec.de/" target="_blank" rel="noreferrer"><img className="h-14 w-auto" alt="Anuga Logo" src={"/anuga-foodtec.png"} /></a>
            <span><a href="https://www.anugafoodtec.de/" target="_blank" rel="noreferrer">Wir stellen auf der Anuga FoodTec 2022 aus!</a></span>
            
          </div>
          </div>
          <div className="w-full lg:w-6/12 lg:px-4 ">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-rose-600 text-sm font-semibold mb-3 mt-3">
                  Nützliche Links
                </span>
                <ul className="list-unstyled">
                  {nLinks.map((prop) => (
                    <li key={prop.name}>
                      <Link href={prop.href}>
                        <a className="text-rose-700 hover:text-rose-800 font-semibold block pb-2 text-sm">
                          {prop.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-rose-600 text-sm font-semibold mb-3 mt-3">
                  Rechtliches
                </span>
                <ul className="list-unstyled">
                  {rLinks.map((prop) =>
                    prop.ext ? (
                      <li key={prop.name}>
                        <a
                          key={prop.name}
                          target="_blank"
                          rel="noreferrer"
                          className="text-rose-700 hover:text-rose-800 font-semibold block pb-2 text-sm"
                          href={prop.href}
                        >
                          {prop.name}
                        </a>
                      </li>
                    ) : (
                      <li key={prop.name}>
                        <Link href={prop.href}>
                          <a className="text-rose-700 hover:text-rose-800 font-semibold block pb-2 text-sm">
                            {prop.name}
                          </a>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                
              </div>
              
            </div>
            
          </div>
        </div>
        <hr className="my-6 border-rose-800" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          
            <div className="text-sm text-rose-700 font-semibold py-1">
              Copyright ©{" "}
              <span id="get-current-year">
                2022 AKO Germany <br /> Built by{" "}
              </span>
              <a
                href="https://www.marvinaziz.de"
                className="text-rose-600 hover:text-white transition duration-300 eas-in-out link link-underline link-underline-black"
              >
                Marvin Aziz
              </a>
              .
            </div>
            <div className="flex justify-center ">
              <img
                className="h-10 w-auto"
                src="https://www.ako.com/wp-content/uploads/2020/01/Logo-AKO-Group-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
