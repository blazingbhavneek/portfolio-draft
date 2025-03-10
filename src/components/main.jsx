// import React from 'react'
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import Hero from '../components/hero.jsx'
import About from './about.jsx';
import Photography from "./photography.jsx";
import Contact from "./contact.jsx";
import Language from "./language.jsx";
import Projects from "./projects.jsx";
import Resume from "./resume.jsx";

const Main = () => {
    const transition = { type: "spring", stiffness: 80, damping: 30, delay: 0.5 };
    const [bgColor, setBgColor] = useState(0);

    const about_colors = ['#ff8981', '#FEB335', '#00e09f'];
    const project_colors = ['#1f82fa', '#8b65d0', '#ee426b'];
    const resume_colors = ['#b9d025', '#00e7cb', '#ffc66f'];
    const contact_colors = ['#480000', '#172400', '#00396b'];
    const hero_colors = ['#e7c4ff', '#fe9abe', '#c0fcf7'];
    const language_colors = ['#00aa8b', '#ff4a1d', '#c163ea'];


    useEffect(() => {
        const interval = setInterval(() => {
        setBgColor(bgColor => {
            return (bgColor + 1) % 3;
        });
        }, 2000); 

        return () => clearInterval(interval); 
    }, []);


  return (
  <div className="flex h-[120vh] w-screen items-center justify-center">
    <div className="grid h-full w-full gap-5 bg-[#fff7eb] p-2 grid-cols-4 grid-rows-5 ">
    
        <motion.div
            className="rounded-3xl col-span-3 row-span-1 flex items-center justify-center"
            style={{ backgroundColor: about_colors[bgColor] }}
            initial={{ scale: 0, x: "0%", y: "50%" }}
            animate={{scale: 1, x: 0, y: 0}}
            transition={transition}
        >

            <About />
        </motion.div>
        
        <motion.div className="rounded-3xl col-span-1 row-span-1  flex items-center justify-center"
        style={{ backgroundColor: language_colors[bgColor] }}
        initial={{ scale: 0, x: "-50%", y: "0%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <Language />
        </motion.div>
        
        <motion.div className="rounded-3xl col-span-1 row-span-4 flex items-center justify-center"
        style={{ backgroundColor: project_colors[bgColor] }}
        initial={{ scale: 0, x: "50%", y: "0%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <Projects></Projects>
        </motion.div>
    
        <motion.div className="rounded-3xl col-span-2 row-span-3  flex items-center justify-center"
        style={{ backgroundColor: hero_colors[bgColor] }}
        >
            <Hero></Hero>
        </motion.div>
    
        <motion.div className="rounded-3xl col-span-1 row-span-3 bg-black  flex items-center justify-center overflow-hidden"
        initial={{ scale: 0, x: "-50%", y: "0%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <Photography />
        </motion.div>
    
        <motion.div className="rounded-3xl col-span-1 row-span-1  flex items-center justify-center"
        style={{ backgroundColor: resume_colors[bgColor] }}
        initial={{ scale: 0, x: "0%", y: "-50%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <Resume />
        </motion.div>
    
        <motion.div className="rounded-3xl col-span-2 row-span-1 bg-[#480000]  flex items-center justify-center"
        style={{ backgroundColor: contact_colors[bgColor] }}
        initial={{ scale: 0, x: "0%", y: "-50%" }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={transition}
        >
            <Contact></Contact>
        </motion.div>
    
        </div>
    </div>

  )
}

export default Main