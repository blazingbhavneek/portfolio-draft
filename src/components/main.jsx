// import React from 'react'
import {motion} from "framer-motion";
import Hero from '../components/hero.jsx'
import About from './about.jsx';
import Photography from "./photography.jsx";

const Main = () => {
    const transition = { type: "spring", stiffness: 80, damping: 30, delay: 0.5 };

  return (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="grid h-full w-full gap-4 bg-[#fff7eb] p-2 grid-cols-4 grid-rows-5 ">
    
        <motion.div className="col-span-3 row-span-1 bg-[#FEB335]  flex items-center justify-center"
        initial={{ scale: 0, x: "0%", y: "50%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <About />
        </motion.div>
    
        <motion.div className="col-span-1 row-span-2 bg-lime-200  flex items-center justify-center"
        initial={{ scale: 0, x: "-50%", y: "0%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <p>Broccoli</p>
        </motion.div>
    
        <motion.div className="col-span-1 row-span-4 bg-black flex items-center justify-center"
        initial={{ scale: 0, x: "50%", y: "0%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <Photography />
        </motion.div>
    
        <motion.div className="col-span-2 row-span-3 bg-tan-200  flex items-center justify-center"
        >
            <Hero></Hero>
        </motion.div>
    
        <motion.div className="col-span-1 row-span-2 bg-green-200  flex items-center justify-center"
        initial={{ scale: 0, x: "-50%", y: "0%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <p>Edamame</p>
        </motion.div>
    
        <motion.div className="col-span-1 row-span-1 bg-red-200  flex items-center justify-center"
        initial={{ scale: 0, x: "0%", y: "-50%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <p>Tomato</p>
        </motion.div>
    
        <motion.div className="col-span-2 row-span-1 bg-gray-200  flex items-center justify-center"
        initial={{ scale: 0, x: "0%", y: "-50%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <p>Tofu</p>
        </motion.div>
    
        </div>
    </div>

  )
}

export default Main