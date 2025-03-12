import Lottie from "lottie-react"
import { useTranslation } from "react-i18next";
import ScrollDownLottie from '../../assets/lottie/scroll-down.json';

const ScrollDown = () => {
    const { t } = useTranslation();
  return (
    <div className="flex flex-row justify-center content-center items-center w-full h-[200px] border-black z-10 border-5 border-solid">
        <Lottie 
        className="rotate-90 h-[60px] w-[60px]"
        animationData={ScrollDownLottie}
        loop={true}
        speed={10}
        />
        <h2 className="font-playfair font-bold bg-transparent text-2xl">{t("scrollDown")}</h2>
    </div>
  )
}

export default ScrollDown