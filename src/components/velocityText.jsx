/* eslint-disable react/prop-types */
import { motion, 
    useMotionValue,
    useTransform,
    useScroll,
    useVelocity,
    useSpring,
    useAnimationFrame,
    useMotionValueEvent
  } from "framer-motion";
  import { wrap } from "@motionone/utils";
  import {useState, useRef, useEffect} from "react";
  
  const VelocityText = (props) => {
  
    const pRef = useRef(null);
    const [textWidth, setTextWidth] = useState(0);
    const movementWidth=textWidth+props.gapBetween;
    useEffect(() => {
      if (pRef.current) {
        setTextWidth(pRef.current.offsetWidth);
      }
    }, []);
  
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
      clamp: false
    });

    const [scrollDirection, setScrollDirection] = useState(1)

    useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious()
    setScrollDirection(diff > 0 ? 1 : -1)
    })
  
    useAnimationFrame((t, delta) => {
      let moveBy = scrollDirection*props.baseVelocity * (delta / 1000);
      moveBy+=scrollDirection*velocityFactor.get()*moveBy
      baseX.set(baseX.get() + moveBy);
    });
  
    const x = useTransform(baseX, (v) => `${wrap(-2*movementWidth, -movementWidth, v)}px`);
    return (
    <div className="bg-transparent w-screen flex justify-center items-center overflow-hidden whitespace-nowrap">
        <motion.div style={{x}}
          className={`bg-transparent w-[calc(100vw-20px)] ${props.textProps} flex flex-row gap-[${props.gapBetween}px] justify-start flex-nowrap`}
        >
          <p ref={pRef} className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
          <p className="m-0 p-0">{props.text}</p>
        </motion.div>
      </div>
    );
  }

  export default VelocityText;