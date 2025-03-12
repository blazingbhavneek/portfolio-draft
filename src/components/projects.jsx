import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import CodeIn from '../assets/lottie/code-in.json';
import CodeHov from '../assets/lottie/code-hover.json';
import PartialText from "./misc/partialText";
import {motion} from "framer-motion";
import { useTranslation } from "react-i18next";


const Projects = () => {
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
    <motion.div className="w-full h-full flex flex-col justify-center items-center overflow-hidden font-banger text-4xl gap-[10px]"
    onMouseEnter={() => {
      setIsHovered(1);
      lottieRef.current.play();
    }}
    onMouseLeave={() => {
      setIsHovered(2);
      lottieRef.current.play();
    }}
      animate={{scale: 1}}
      whileHover={{ scale: 1.1}}
      whileTap={{ scale: 1.05}} 
      transition={{ duration: 0.1 }}
    >
      <div className="w-[50px] h-[50px]">
        <Lottie
          key={isHovered}
          lottieRef={lottieRef}
          animationData={isHovered > 0 ? CodeHov : CodeIn}
          loop={isHovered > 0 ? 0 : 1} 
          speed={0.5}
        />
      </div>
      <PartialText 
        text={t("projectButton")}
        bgcolor="#1f82fa"
        txtcolor="#fdebc2"
        percent={currentPercent} 
        txtProps="font-banger text-5xl"
        />
    </motion.div>
  );
};

export default Projects;