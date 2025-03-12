import { useState, useEffect } from "react";
import PartialText from "./misc/partialText";
import {motion} from "framer-motion";
import { useTranslation } from "react-i18next";


const Resume = () => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
        const duration = 2500; 
        const intervalTime = 50; 
        const increment = (100 * intervalTime) / duration;
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
      const { t } = useTranslation();

  return (
    <motion.div className="w-full h-full flex flex-col justify-center items-center overflow-hidden font-banger text-4xl gap-[10px]"

      animate={{scale: 1}}
      whileHover={{ scale: 1.1}}
      whileTap={{ scale: 1.05}} 
      transition={{ duration: 0.1 }}
    >
      <PartialText 
        text={t("resumeButton")}
        bgcolor="#b9d025"
        txtcolor="#172303"
        percent={currentPercent} 
        txtProps="font-banger text-5xl"
        />
    </motion.div>
  );
};

export default Resume;