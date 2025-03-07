/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import { useState, useRef, useEffect } from "react";
import PhoneIn from '../assets/lottie/phone-in.json';
import PhoneHov from '../assets/lottie/phone-hover.json';
import PhoneOut from '../assets/lottie/phone-out.json';
import PartialText from "./misc/partialText";

const Contact = () => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(-1);
  const lottieRef = useRef();

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
    <div className="w-full h-full flex justify-center items-center gap-[10px]"
      onMouseEnter={() => {
        setIsHovered(1);
        lottieRef.current.play();
      }}
      onMouseLeave={() => {
        setIsHovered(2);
        lottieRef.current.play();
      }}
    >
       <div className="w-[50px] h-[50px]">
        <Lottie 
          key={isHovered}
          lottieRef={lottieRef}
          animationData={isHovered === 2 ? PhoneOut : isHovered === 1 ? PhoneHov : PhoneIn
          }
          loop={isHovered > 0 ? 0 : 1} 
          speed={0.5}
        />
      </div>

      <PartialText 
        text="Lets Connect..." 
        bgcolor="#480000"
        txtcolor="#fdebc2"
        percent={currentPercent} 
        txtProps="font-banger font-bold bg-transparent text-5xl"
      />
    </div>
  )
}

export default Contact;