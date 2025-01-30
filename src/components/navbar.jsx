/* eslint-disable react/prop-types */
import LinkButtons from "./buttons/links"
import NavMenu from "./buttons/navmenu"
import Logo from '../assets/my-logo.svg'
import { motion, 
  useMotionValue,
  useScroll,
  useSpring,
  useAnimationFrame,
  useMotionValueEvent
} from "framer-motion";
import {useState, useRef, useEffect} from "react";

const Navbar = (props) => {
  const x = useMotionValue(0);
  const y = useSpring(x, { stiffness: 500, damping:50, mass:1 });
  const pRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    if (pRef.current) {
      setNavHeight(pRef.current.offsetHeight);
    }
  }, []);

  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(1)
  useMotionValueEvent(scrollY, "change", (current) => {
  const diff = current - scrollY.getPrevious()
  setScrollDirection(diff > 0 ? 1 : -1)
  })

  useAnimationFrame(() => {
    if(scrollDirection===1){
      y.set(0);
    }
    else{
      y.set(-navHeight);
    }
  });

  return (
    <motion.div ref={pRef} style={{y}} className="shadow-sm z-[1000] fixed top-[0] left-0 bg-white w-[100vw] py-[20px] px-[20px] flex flex-row justify-between items-center gap-2">
      <div className="flex flex-row justify-between items-center gap-[10px]">
        <img src={Logo} alt="My Logo" width="40" height="40"/>
      </div>
      <div className="flex-row gap-2">
        <div className="sm:flex hidden flex flex-row gap-[10px] mr-[10px]">
          {props.refArray.map((item, index) => {
              return <LinkButtons key={index} name={item.name} font="font-lato text-[18px] font-light" targetRef={item.refvar} />;
          })}
        </div>
        <div className="sm:hidden flex">
          <NavMenu></NavMenu>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar