import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next.use(LanguageDetector).use(initReactI18next).init(
{
    debug: true,
    lng: "en",
    resources: {
    en: {
        translation: {
        firstName: "Bhavneek",
        lastName: "Singh",
        aboutButton: "About Me!",
        projectButton: "Projects",
        resumeButton: "Resume",
        connectButton: "Let's Connect...",
        photographyButton: "Photography",
        scrollDown: "Scroll Down!",
        aboutSection: `Hey! I'm Bhavneek.  
        During the day, I teach computers to be smarter (Programming and ML), and by night, I'm probably making Indian-style Udon in Kobe, Japan.  
        When I'm not blending Indian spices into Japanese cuisine or debugging code, you'll find me wandering the streets with my camera, trying to capture that perfect shot.  
        A former IITian who somehow ended up making AI and fusion noodles on the other side of the world.  
        Want to see what I've been up to? Visit my Project Section or Resume!`,
        },
    },

    jp: {
        translation: {
        firstName: "バヴニーク",
        lastName: "シング",
        aboutButton: "私について！",
        projectButton: "プロジェクト",
        resumeButton: "履歴書",
        connectButton: "つながりましょう...",
        photographyButton: "写真撮影",
        scrollDown: "スクロールダウン！",
        aboutSection: `こんにちは！バヴニークです。  
        昼間はコンピューターを賢くする仕事（プログラミングと機械学習）をしていて、夜は神戸でインド風うどんを作っているかもしれません。  
        インドのスパイスを日本料理に取り入れたり、コードをデバッグしたりしていないときは、カメラを持って街をさまよいながら完璧な一枚を狙っています。  
        元IIT生で、なぜかAIとフュージョンヌードルを作るために世界の反対側にたどり着きました。  
        私の最近の活動を見たいですか？プロジェクトセクションや履歴書をチェックしてください！`,
        },
    },
    },
}
);