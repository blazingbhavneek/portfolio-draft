import PartialText from "./misc/partialText";
import { useState } from "react";
import {
  motion,
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
    [0.7 * window.innerHeight, 2*window.innerHeight],
    [0, 100],
    { clamp: true }
  );

  const scale = useTransform(
    smoothScroll,
    [1 * window.innerHeight, 2*window.innerHeight],
    [1, 0.7],
    { clamp: true }
  );

  const rotate = useTransform(
    smoothScroll,
    [1 * window.innerHeight, 2*window.innerHeight],
    [0, -10],
    { clamp: true }
  );

  useMotionValueEvent(x, "change", (latest) => {
    setCurrentPercent(latest);
  });

  return (
    <div className="bg-black sticky top-1/2 -translate-y-1/2 z-0">
    <motion.div style = {{scale, rotate}} className="w-screen h-[100vh] bg-white flex justify-center items-center">
        <div className="w-[50%]">
            <PartialText 
                text="Hey! I'm Bhavneek. 
                During the day, I teach computers to be smarter (Programming and ML), and by night, I'm probably making Indian style Udon in Kobe, Japan. 
                When I'm not blending Indian spices into Japanese cuisine or debugging code, you'll find me wandering the streets with my camera, trying 
                to capture that perfect shot. A former IITian who somehow ended up making AI and fusion noodles on the other side of the world. 
                Want to see what I've been up to? Keep scrolling!" 
                percent={currentPercent} 
            />
      </div>
    </motion.div>
    </div>
  );
};

export default About;