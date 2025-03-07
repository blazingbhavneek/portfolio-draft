import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import CodeIn from '../assets/lottie/code-in.json';
import CodeHov from '../assets/lottie/code-hover.json';
import PartialText from "./misc/partialText";

const Projects = () => {
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
    <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden font-banger text-4xl gap-[10px]"
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
          animationData={isHovered > 0 ? CodeHov : CodeIn}
          loop={isHovered > 0 ? 0 : 1} 
          speed={0.5}
        />
      </div>
      <PartialText 
        text="Projects" 
        bgcolor="#1f82fa"
        txtcolor="#fdebc2"
        percent={currentPercent} 
        txtProps="font-banger text-5xl"
        />
    </div>
  );
};

export default Projects;