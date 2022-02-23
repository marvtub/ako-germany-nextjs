import React from "react";
import ReactPlayer from "react-player/lazy";

function TestimonialSection() {
  return (
    <div id="testimonial">
      <section className="relative md:py-20 py-10 mb-4 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="items-center ">
            
            <div className="w-full md:max-w-4xl md:mx-auto md:px-8  md:text-center">
              <div className="md:pr-12">
                {/* <div className="text-rose-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-200">
                    <GiftIcon />                 
                 </div> */}
                <h3 className="text-base text-rose-700 mt-6 font-semibold tracking-wide uppercase">
                  SEUR Casestudy
                </h3>
                <h3 className="text-4xl mt-2 font-extrabold">
                  Unsere Technologie in Aktion 
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-500">
                  Das Unternehmen SEUR verwendet unsere Technologie, um sicherzustellen, dass die transportierte Ware
                  sicher & unbeschadet beim Kunden ankommt. <br/>Die Nutzung in verschiedensten Bereichen des Unternehmens, ermöglicht es, den Zustand der Produkte kontinuierlich zu überwachen und dadurch frühzeitig Anzeichen von Qualitätsveränderungen zu erkennen.
                </p>
                
                {/* <div className="mt-8">
                   <p className="text-gray-800 text-sm "><span className="text-2xl font-bold">299 € pro Sensor</span>{' '} zzgl. MwSt.</p>
                   <p className="text-gray-500 text-base">Danach nur 69 € pro Jahr</p>
                 </div> */}
                {/* <div className="mt-8">
                  <MainCta href="#anfragen" cta="Jetzt Anfrage stellen" />
                </div> */}
              </div>
            </div>
            <div className="w-full max-w-4xl mx-auto lg:px-4 pt-8 lg:pb-0">
              <ReactPlayer url="https://youtu.be/HiCog-eI9fc" type="video/mp4" width={853}
              controls={true}
              height={480}
              loop={true} playing={true} muted={true} loop={true}/>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default TestimonialSection;
