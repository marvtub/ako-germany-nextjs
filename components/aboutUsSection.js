import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function AboutUsSection() {
  return (
    <div id="about">
      <section className="pt-20 pb-48 bg-slate-50">
        <div className="container mx-auto  px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="lg:text-center">
            <h3 className="text-base text-rose-700 font-semibold tracking-wide uppercase">
              AKO Germany
            </h3>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Unsere Vision
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          </div>
          <div className="flex flex-wrap justify-center">
          {/* PERSON */}
            <div className="w-6/12  lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://uploads-ssl.webflow.com/5fa541562d022d50c0a64fed/610bafdafcae17594e33521a_Marvin_Aziz_Webdesign_Webdeveloper_Kelvyn.jpg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px max-h-72"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Marvin Aziz</h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-normal">
                    Web Developer
                  </p>
                  <div className="mt-6">
                    
                    <button
                      className="bg-rose-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          {/* PERSON */}
          {/* PERSON */}
            <div className="w-6/12  lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://uploads-ssl.webflow.com/5fa541562d022d50c0a64fed/610a6ec90ddc315d36a08f43_michael_bruck_kelvyn.jpg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px max-h-72"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Michael Bruck</h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-normal">
                    Geschäftsführer
                  </p>
                  <div className="mt-6">
                    
                    <button
                      className="bg-rose-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          {/* PERSON */}
          {/* PERSON */}
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://uploads-ssl.webflow.com/5fa541562d022d50c0a64fed/610a736e106fb76dc0feb76b_1B4B6241.jpg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px max-h-72"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Joe Soboll</h5>
                  <p className="mt-1 text-sm text-gray-400 uppercase font-normal">
                    Head of Sales
                  </p>
                  <div className="mt-6">
                    
                    <button
                      className="bg-rose-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      </button>
                    
                  </div>
                </div>
              </div>
            </div>
          {/* PERSON */}
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsSection;
