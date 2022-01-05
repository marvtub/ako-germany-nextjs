import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import { motion } from 'framer-motion'


function FeaturesSection() {

  const features = [
    {
      name: 'Skalierbar',
      description:
        'Die effizienteste Lösung zur Überwachung von Temperatur und Luftfeuchtigkeit für Anlagen, die an mehreren Orten verteilt sind.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Automatisierte Berichte',
      description:
        'Tägliche, wöchentliche und monatliche Berichte für interne Audits und Qualitätsbescheinigungen.',
      icon: ScaleIcon,
    },
    {
      name: 'Einfache & schnelle Installation',
      description:
        'Einfach zu installieren und einzurichten - ganz ohne Verkabelung.',
      icon: LightningBoltIcon,
    },
    {
      name: '24/7 Benachrichtigungen',
      description:
        'Alarme in Echtzeit per E-Mail. 24/7 Alarmsystem bei Überschreitung der festgelegten Grenzwerte.',
      icon: AnnotationIcon,
    },
  ]
 // custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};



  return (
    <motion.div 
    initial='initial' animate='animate' exit={{ opacity: 0 }}
    id="features">
      <div className="py-24 bg-slate-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-rose-700 font-semibold tracking-wide uppercase">
              Drahtloses Temperaturmonitoring
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nie wieder Stift & Papier
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            AKO macht eine kontinuierliche Datenaufzeichnung einfach. Drahtlos &
jederzeit über die Cloud-Plattform verfügbar.
            </p>
          </div>

          <motion.div  
          variants={stagger}
              
          className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <motion.div 
                 variants={fadeInUp}
                key={feature.name} className="relative max-w-xl">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-700 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturesSection;
