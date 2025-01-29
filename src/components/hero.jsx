import VelocityText from "./velocityText";

const Hero = () => {

  return (
    <div className="border-solid border-[5px] border-orange-500 w-screen h-screen bg-white flex flex-col justify-center items-center overflow-hidden whitespace-nowrap">
      <VelocityText text="Bhavneek" textSize={36} gapBetween={20} baseVelocity={100}></VelocityText>
      <VelocityText text="Singh" textSize={36} gapBetween={20} baseVelocity={-100}></VelocityText>  
    </div>
  );
};

export default Hero;