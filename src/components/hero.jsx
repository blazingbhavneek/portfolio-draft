import VelocityText from "./misc/velocityText";
import Mine from "../../src/assets/mine.jpg";
import MineBgRem from "../../src/assets/minebgrem.png";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center overflow-hidden whitespace-nowrap relative">
      <div className="z-20 bg-transparent">
        <VelocityText text="Bhavneek" textProps="font-playfair text-[36px] text-gray-900" gapBetween={20} baseVelocity={100} />
        <VelocityText text="Singh" textProps="font-playfair text-[36px] text-gray-900" gapBetween={20} baseVelocity={-100} />
      </div>

      <motion.div 
        className="bg-transparent absolute w-[300px] h-[300px] rounded-full overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1}}
        // whileHover={{ scale: 1.2, zIndex: 100}}
        // whileTap={{ scale: 1.1, zIndex: 100}}
      >
        <img src={Mine} alt="Logo" className="blur-[2px] z-10 absolute inset-0 w-full h-full object-cover" />
        <motion.img 
          initial={{ scale: 0 }}
          animate={{ scale: 1.05}}
          whileHover={{ scale: 1.2, zIndex: 100}}
          whileTap={{ scale: 1.1, zIndex: 100}}
          src={MineBgRem} alt="Logo" className="z-30 absolute inset-0 w-full h-full object-cover mix-blend-normal" />
      </motion.div>


    </div>
  );
};

export default Hero;