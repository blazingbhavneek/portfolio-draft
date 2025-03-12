/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const Card = ({ i, title, description, src, url, color }) => {

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 10}px)` }}
        className="flex flex-col relative -top-1/4 h-[500px] w-[1000px] rounded-[25px] p-[50px] transform-origin-top"
      >

        <h2 className="text-center m-0 text-[28px]">{title}</h2>
        <div className="flex h-full mt-[50px] gap-[50px]">
            <div className="w-[40%] relative top-[10%]">
                <p className="text-[16px]">
                    {description}
                </p>
            </div>

          <div className="w-[60%] h-full rounded-[25px] overflow-hidden relative">
            <motion.div
              className="w-full h-full"
            >
              <img
                src={`/images/${src}`}
                alt="image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;