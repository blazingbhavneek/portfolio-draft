import PartialText from "../components/misc/partialText";
import { useState } from "react";
import ScrollDown from "../components/misc/scrollDown";
import {
  useTransform,
  useScroll,
  useSpring,
  useMotionValueEvent
} from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
    const { scrollY } = useScroll();
    const [currentPercent, setCurrentPercent] = useState(0);
    const [showScroll, setShowScroll] = useState(false);
    const { t } = useTranslation();

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
        const prev = scrollY.getPrevious() || 0; 
        const diff = current - prev;
        if (diff > 0 && current > 50) setShowScroll(true);
        else setShowScroll(false);
    });

    return (
        <div className="w-screen h-[150vh] bg-white flex flex-col justify-around content-center items-center">
            {!showScroll ? <ScrollDown /> : <div className="w-[200px] h-[200px] border-black rotate-90 z-10 border-5 border-solid" />}

            <div className="w-[50px] h-[50px] border-black rotate-90 z-10 border-5 border-solid" />
            <div className="bg-white w-[50%] h-[50vh] sticky top-1/2 -translate-y-1/2 z-20">
                <PartialText 
                    text={t("aboutSection")}
                    percent={currentPercent} 
                    txtProps="font-playfair font-bold bg-transparent text-2xl"
                />
            </div>
        </div>
    );
};

export default About;
