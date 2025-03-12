import { useState } from "react";
import {motion} from "framer-motion";
import { useTranslation } from "react-i18next";


const Language = () => {
    const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language)
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
        style={{ color: getFontColor('en') }}
        onClick={() => handleLanguageClick('en')}
        className="cursor-pointer"
      >
        English
      </div>
      <div
        style={{ color: getFontColor('jp') }}
        onClick={() => handleLanguageClick('jp')}
        className="cursor-pointer"
      >
        日本語
      </div>
    </motion.div>
  );
};

export default Language;