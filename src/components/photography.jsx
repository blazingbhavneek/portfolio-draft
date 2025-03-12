import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PartialText from "./misc/partialText";
import { useTranslation } from "react-i18next";

const images = [
  "../../src/assets/photography/1.webp",
  "../../src/assets/photography/2.webp",
  "../../src/assets/photography/3.webp",
  "../../src/assets/photography/4.webp",
  "../../src/assets/photography/5.webp"
];

export default function Photography() {
  const [index, setIndex] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  const { t } = useTranslation();

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="rounded-3xl col-span-1 row-span-4 flex items-center justify-center relative overflow-hidden w-full h-full"
      animate={{scale: 1}}
      whileHover={{ scale: 1.1}}
      whileTap={{ scale: 1.05}} 
      transition={{ duration: 0.1 }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            className="absolute inset-0 w-full h-full object-cover overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ opacity: { duration: 1 } }}
          />
        ))}
      </div>
      <PartialText 
          text={t("photographyButton")}
          bgcolor="transparent"
          txtcolor="white"
          txtProps = "font-banger relative p-[5px] text-white text-3xl font-bold z-10"
          percent={currentPercent} 
      />
    </motion.div>
  );
}
