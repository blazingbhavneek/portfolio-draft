import { useState } from "react";
import {motion} from "framer-motion";


const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const getFontColor = (language) => {
    return selectedLanguage === language ? "#3c0000" : "#fcebc2";
  };

  return (
    <motion.div className="w-full h-full flex flex-col justify-center items-center overflow-hidden font-banger text-4xl gap-[10px]"
        animate={{scale: 1}}
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 1.05}} 
        transition={{ duration: 0.1 }}
    >
      <div
        style={{ color: getFontColor('English') }}
        onClick={() => handleLanguageClick('English')}
        className="cursor-pointer"
      >
        English
      </div>
      <div
        style={{ color: getFontColor('日本語') }}
        onClick={() => handleLanguageClick('日本語')}
        className="cursor-pointer"
      >
        日本語
      </div>
    </motion.div>
  );
};

export default Language;