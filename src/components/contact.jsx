import Lottie from "lottie-react";
import { useState, useRef, useEffect } from "react";
import ChatIn from '../assets/lottie/chat-in.json';
import ChatHov from '../assets/lottie/chat-hover.json';
import PartialText from "./misc/partialText";
import { motion } from "framer-motion";
import Icon1 from '../assets/icons/at.svg';
import Icon2 from '../assets/icons/github.svg';
import Icon3 from '../assets/icons/linkedin.svg';
import Icon4 from '../assets/icons/line.svg';
import Icon5 from '../assets/icons/instagram.svg';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(-1);
  const lottieRef = useRef();
  const { t } = useTranslation();

  const icons = [
    { id: 1, icon: Icon1, link: "https://example.com/icon1" },
    { id: 2, icon: Icon2, link: "https://example.com/icon2" },
    { id: 3, icon: Icon3, link: "https://example.com/icon3" },
    { id: 4, icon: Icon4, link: "https://example.com/icon3" },
    { id: 5, icon: Icon5, link: "https://example.com/icon3" },
  ];

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
      className="w-full h-full flex justify-center items-center gap-[10px] p-10"
      style={{ justifyContent: isHovered == 1 ? "space-around" : "center" }}
      onMouseEnter={() => {
        setIsHovered(1);
        lottieRef.current.play();
      }}
      onMouseLeave={() => {
        setIsHovered(2);
        lottieRef.current.play();
      }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
    >
      <div className="w-[50px] h-[50px]">
        <Lottie
          key={isHovered}
          lottieRef={lottieRef}
          animationData={isHovered > 0 ? ChatHov : ChatIn}
          loop={isHovered > 0 ? 0 : 1}
          speed={0.5}
        />
      </div>

      {isHovered == 1 ? (
        <>
          {icons.map(({ id, icon, link }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt={`icon-${id}`} className="w-[50px] h-[50px]" />
            </a>
          ))}
        </>
      ) : (
        <PartialText
          text={t("connectButton")}
          bgcolor="#480000"
          txtcolor="#fdebc2"
          percent={currentPercent}
          txtProps="font-banger font-bold bg-transparent text-5xl"
        />
      )}
    </motion.div>
  );
};

export default Contact;