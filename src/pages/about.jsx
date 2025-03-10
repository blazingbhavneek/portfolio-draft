import PartialText from "../components/misc/partialText";
import { useState } from "react";
import ScrollDown from '../assets/lottie/scroll-down.json';
import Lottie from "lottie-react";
import {
  useTransform,
  useScroll,
  useSpring,
  useMotionValueEvent
} from "framer-motion";

const About = () => {
    const { scrollY } = useScroll();
    const [currentPercent, setCurrentPercent] = useState(0);
    const [showScroll, setShowScroll] = useState(false);

    const smoothScroll = useSpring(scrollY, {
        stiffness: 2000, damping: 75, mass: 0.1
    });

    const x = useTransform(
        smoothScroll,
        [0, 0.3 * window.innerHeight],
        [0, 100],
        { clamp: true }
    );

    useMotionValueEvent(x, "change", (latest) => {
        setCurrentPercent(latest);
    });

    useMotionValueEvent(scrollY, "change", (current) => {
        const prev = scrollY.getPrevious() || 0;  // Prevents undefined issues
        const diff = current - prev;
        if (diff > 0 && current > 50) setShowScroll(true);
        else setShowScroll(false);
    });

    return (
        <div className="w-screen h-[150vh] bg-white flex flex-col justify-around content-center items-center border-5 border-solid border-red-800">
            {!showScroll ? (
            <div className="flex flex-col justify-center content-center items-center w-[200px] h-[200px] border-black z-10 border-5 border-solid">
                <Lottie 
                className="rotate-90 h-[60px] w-[60px]"
                animationData={ScrollDown}
                loop={true}
                speed={10}
                />
                <h2 className="font-playfair font-bold bg-transparent text-2xl">Scroll Down!</h2>
            </div>
            ) : (
            <div className="w-[200px] h-[200px] border-black rotate-90 z-10 border-5 border-solid" />
            )}

            <div className="w-[50px] h-[50px] border-black rotate-90 z-10 border-5 border-solid" />
            <div className="bg-white w-[50%] h-[50vh] sticky top-1/2 -translate-y-1/2 z-20">
                <PartialText 
                    text="Hey! I'm Bhavneek. 
                    During the day, I teach computers to be smarter (Programming and ML), and by night, I'm probably making Indian style Udon in Kobe, Japan. 
                    When I'm not blending Indian spices into Japanese cuisine or debugging code, you'll find me wandering the streets with my camera, trying 
                    to capture that perfect shot. A former IITian who somehow ended up making AI and fusion noodles on the other side of the world. 
                    Want to see what I've been up to? Visit my Project Section or Resume!"
                    percent={currentPercent} 
                    txtProps="font-playfair font-bold bg-transparent text-2xl"
                />
            </div>
        </div>
    );
};

export default About;
