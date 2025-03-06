import VelocityText from "./misc/velocityText";
import Mine from "../../src/assets/mine.jpg";
import MineBgRem from "../../src/assets/minebgrem.png";
import {motion} from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", stiffness: 200, damping: 30};
  return (
    <div className="h-full w-full rounded-md bg-[#fe9abe] flex flex-col justify-center items-center overflow-hidden whitespace-nowrap relative">
      <motion.div className="z-20 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition = {{ duration: 0.5, delay: 0.6}}
      >
        <VelocityText text="Bhavneek" textProps="font-playfair text-[36px] text-[#450000]" gapBetween={20} baseVelocity={100} />
        <VelocityText text="Singh" textProps="font-playfair text-[36px] text-[#450000]" gapBetween={20} baseVelocity={-100} />
      </motion.div>

      <motion.div 
        className="bg-transparent absolute w-[300px] h-[300px] rounded-full overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1}}
        transition = {transition}
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