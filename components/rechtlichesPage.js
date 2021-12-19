
import HeaderNav from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion"
function RechtlichesPage(props) {


  const initial = { opacity: 0, y:60}
  const animate= { opacity: 1, y:0, transition:{duration: 0.3, ease: "easeInOut"}}
  const animateContent = { opacity: 1, y:0, transition:{duration: 0.6, delay:0.1, ease: "easeInOut"}}

    return (
        <motion.div  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <div className="pb-5 bg-slate-100  ">
        <HeaderNav />
      </div>
      <main className="container mx-auto lg:px-4">
        <div className="px-6   max-w-7xl  pt-10 pb-40">
          <div className=" lg:text-left max-w-7xl sm:pb-16 md:pb-20 lg:max-w-5xl lg:w-full lg:pb-28 xl:pb-32">
            <div className=" my-10 ">
              <motion.h1
              initial={initial}
              animate={animate}
               className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {props.title}
              </motion.h1>
            </div>
            <motion.p initial={initial} animate={animateContent} className="text-gray-600">
              {props.content}
            </motion.p>
          </div>
        </div>
      </main>
      <Footer />

        </motion.div>
    )
}

export


default RechtlichesPage
