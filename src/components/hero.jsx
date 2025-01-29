import VelocityText from "./velocityText";
import Mine from "../../src/assets/mine.jpg";
import MineBgRem from "../../src/assets/minebgrem.png";
// import {motion} from "motion";

const Hero = () => {
  return (
    <div className="border-solid border-[5px] border-orange-500 w-screen h-screen bg-white flex flex-col justify-center items-center overflow-hidden whitespace-nowrap relative">
      <div className="z-20 bg-transparent">
        <VelocityText text="Bhavneek" textSize={36} gapBetween={20} baseVelocity={100} />
        <VelocityText text="Singh" textSize={36} gapBetween={20} baseVelocity={-100} />
      </div>

      <div className="bg-transparent absolute w-[300px] h-[300px] rounded-full overflow-hidden">
        <img src={Mine} alt="Logo" className="z-10 absolute inset-0 w-full h-full object-cover" />
        <img src={MineBgRem} alt="Logo" className="z-30 absolute inset-0 w-full h-full object-cover mix-blend-normal" />
      </div>


    </div>
  );
};

export default Hero;