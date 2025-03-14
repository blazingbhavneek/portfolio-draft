import PartialText from "./misc/partialText";
import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import AccountIn from '../assets/lottie/account-in.json';
import AccountHov from '../assets/lottie/account-hover.json';
import {motion} from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(-1);
  const lottieRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    const duration = 2500; 
    const intervalTime = 50; 
    const increment = (100 * intervalTime) / duration;
    setIsHovered(-1);
    const interval = setInterval(() => {
      setCurrentPercent((prevPercent) => {
        const newPercent = prevPercent + increment;
        if (newPercent >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newPercent;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="w-full h-full flex justify-center items-center gap-[10px]"
      onMouseEnter={() => {
        setIsHovered(1);
        lottieRef.current.playFromBeginning();
      }}
      onMouseLeave={() => {
        setIsHovered(2);
        lottieRef.current.playFromBeginning();
      }}

      animate={{scale: 1}}
      whileHover={{ scale: 1.1}}
      whileTap={{ scale: 1.05}} 
      transition={{ duration: 0.1 }}
    >
      <div className="w-[70px] h-[70px]">
        <Lottie 
          key={isHovered}
          lottieRef={lottieRef}
          animationData={isHovered > 0 ? AccountHov : AccountIn}
          loop={isHovered > 0 ? 0 : 1} 
          speed={0.5}
        />
      </div>
      <PartialText 
        text={t("aboutButton")}
        bgcolor="#feb22a"
        txtcolor="#3c0000"
        percent={currentPercent} 
        txtProps="font-banger font-bold bg-transparent text-7xl"
      />
    </motion.div>
  );
};

export default About;
