/* eslint-disable react/prop-types */
import LinkButtons from "./buttons/links"
import NavMenu from "./buttons/navmenu"
import Logo from '../assets/my-logo.svg'
import { motion, 
  useMotionValue,
  useScroll,
  useSpring,
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

  useMotionValueEvent(scrollY, "change", (current) => {
  const diff = current - scrollY.getPrevious()
  if(diff > 0) y.set(-navHeight);
  else y.set(0);
  })

  return (
    <motion.div ref={pRef} style={{y}} className="shadow-md z-[1000] fixed top-[0] left-0 bg-white w-[100vw] py-[10px] px-[20px] flex flex-row justify-between items-center gap-2">
      <div className="flex flex-row justify-between items-center">
        <img src={Logo} alt="My Logo" width="45" height="45"/>
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
<a href="https://lordicon.com/">Icons by Lordicon.com</a>

export default Navbar