import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="border-solic border-[5px] border-orange-500 w-screen h-screen bg-white flex justify-center items-center overflow-hidden whitespace-nowrap">
        <motion.div 
        animate={{
          translateX: ['0px', '-565px'], //!!!!!!!!!!!! fixed pixel size
          transition: {
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }
        }}
      
        // !!!!!!!!!!!!!!!!!! fixed font size
        className="w-[calc(100vw-20px)] font-playfair text-[76px] flex flex-row gap-[20px] justify-start flex-nowrap ">
          <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
          <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
          <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
          <p className="min-w-[12ch] m-0 p-0">Bhavneek Singh</p>
        </motion.div>
    </div>
  )
}

export default Hero