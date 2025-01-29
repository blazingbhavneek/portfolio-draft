import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const textSize=32;
  const gapBetween=20;
  const pRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (pRef.current) {
      setTextWidth(pRef.current.clientWidth);
    }
  }, []);

  return (
    <div className="border-solic border-[5px] border-orange-500 w-screen h-screen bg-white flex justify-center items-center overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{
          translateX: [0, -textWidth-gapBetween], 
          transition: {
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }
        }}
        className={`w-[calc(100vw-20px)] font-playfair text-[${textSize}px] flex flex-row gap-[${gapBetween}px] justify-start flex-nowrap`}
      >
        <p ref={pRef} className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
        <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
        <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
        <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
        <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
        <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
        <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
      </motion.div>
    </div>
  );
};

export default Hero;