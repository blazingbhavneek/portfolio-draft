import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "../../src/assets/1.webp",
  "../../src/assets/2.webp",
  "../../src/assets/3.webp",
  "../../src/assets/4.webp",
  "../../src/assets/5.webp"
];

export default function Photography() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="col-span-1 row-span-4 flex items-center justify-center relative overflow-hidden w-full h-full"
    >
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ opacity: { duration: 1 } }}
          />
        ))}
      </div>
      <p className="relative text-white text-3xl font-bold z-10">Photography</p>
    </motion.div>
  );
}
