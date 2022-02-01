import HeaderNav from "./header";
import MainCta from "./mainCta";
import { motion } from "framer-motion";

function Hero() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const stagger = {
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };



  return (
      <motion.div initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay:0.2, staggerChildren:0.5 }}
      // variants={stagger}
        
      >
        <div className="relative bg-slate-50 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="relative z-10 pb-8 bg-slate-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block xl:hidden absolute right-0 inset-y-0 h-full w-48 text-slate-50 transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <HeaderNav key={"2308"} />
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <motion.span key={"whatev1"} className="block xl:inline hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-900 transition-colors duration-300">
                      Effiziente Kühlketten
                    </motion.span>{" "}
                    <motion.span key={"whatev2"} className="block text-rose-700 xl:inline">
                      auf Knopfdruck
                    </motion.span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Drahtlose Temperatur- und Feuchtigkeitsdatenlogger, die alle
                    notwendigen Informationen zur Verbesserung der
                    Wartungsaufgaben und der Produktqualität liefern.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <MainCta href="#anfragen" cta="Jetzt Anfragen" />
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#features"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-700 bg-rose-100 hover:bg-rose-200 md:py-4 md:text-lg md:px-10"
                      >
                        Mehr dazu
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <motion.div 
              initial={{ opacity: 0, x: 800 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0,  }}
              transition={{ duration: 0.5, delay:0.6 , ease: easing}} 
              className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block">
            <video
              className=" max-w-none object-cover z-10 background-size-cover"
              autoPlay
              id="heroVideo"
              loop={true}
              muted={true}
              key={"3184"}
              poster="https://images.pexels.com/photos/3735169/pexels-photo-3735169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            >
              <source
                src="/WhatsApp Video 2021-12-03 at 16.39.32.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
          <div className="md:hidden">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.pexels.com/photos/3735169/pexels-photo-3735169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </div>
      </motion.div>
  );
}

export default Hero;
