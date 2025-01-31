import PartialText from "./misc/partialText";
import { useState } from "react";
import { 
    // motion, 
    useMotionValue,
    useTransform,
    useScroll,
    // useVelocity,
    useSpring,
    // useAnimationFrame,
    useMotionValueEvent
  } from "framer-motion";
//   import { wrap } from "@motionone/utils";
const About = () => {
    const textPercent = useMotionValue(0);
    const { scrollY } = useScroll();
    const smoothScroll = useSpring(scrollY, {
        damping: 50,
        stiffness: 400
    });

    const x = useTransform(smoothScroll, 
        [0.2 * window.innerHeight, window.innerHeight], 
        [0, 100], 
        { clamp: true }
      );


    const [renderTrigger, setRenderTrigger] = useState(false);
    useMotionValueEvent(x, "change", () => {
        textPercent.set(x.get());
        console.log(x.get());
        setRenderTrigger((prev) => !prev); 
    });

    return (
        <div className="border-solic border-[5px] border-teal-500 w-screen h-screen bg-white flex justify-center items-center">
            <PartialText text="Hello My name is Bhavneek" percent={textPercent} trigger={renderTrigger} />
        </div>
    )
}

export default About;