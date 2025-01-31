import PartialText from "./misc/partialText";
import { useState } from "react";
import {
  useTransform,
  useScroll,
  useSpring,
  useMotionValueEvent
} from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();
  const [currentPercent, setCurrentPercent] = useState(0);
  
  const smoothScroll = useSpring(scrollY, {
    stiffness: 2000, damping:75, mass:0.1
  });

  const x = useTransform(
    smoothScroll,
    [0.7 * window.innerHeight, 1.6*window.innerHeight],
    [0, 100],
    { clamp: true }
  );

  useMotionValueEvent(x, "change", (latest) => {
    setCurrentPercent(latest);
  });

  return (
    <div className="border-solid border-[5px] border-teal-500 w-screen h-[200vh] bg-white flex justify-center items-center">
        <div className="w-[50%] sticky top-1/2 -translate-y-1/2">
            <PartialText 
                text="Hey! I'm Bhavneek. 
                During the day, I teach computers to be smarter (Programming and ML), and by night, I'm probably making Indian style Udon in Kobe, Japan. 
                When I'm not blending Indian spices into Japanese cuisine or debugging code, you'll find me wandering the streets with my camera, trying 
                to capture that perfect shot. A former IITian who somehow ended up making AI and fusion noodles on the other side of the world. 
                Want to see what I've been up to? Keep scrolling!" 
                percent={currentPercent} 
            />
      </div>
    </div>
  );
};

export default About;