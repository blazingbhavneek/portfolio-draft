import PartialText from "./misc/partialText";
import { useState, useEffect } from "react";

const About = () => {
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

  console.log(currentPercent);
  return (
    <div className="w-100 h-100 flex justify-center items-center">
      <PartialText 
          text="About Me!" 
          bgcolor="#feb22a"
          txtcolor="#3c0000"
          percent={currentPercent} 
      />
    </div>
  );
};

export default About;