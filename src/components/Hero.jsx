import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import StyleToggle from "./utils/StyleToggle";
import LanguageToggle from "./utils/LanguageToggle";
import { useLang } from "./utils/LanguageContext";
import logo from "./../assets/Logo-no-bg.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { getObjectByLangWithOrderedArray } from "./utils/Utils";

export default function Hero() {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0]);
    const height = useTransform(scrollYProgress, [0, 1], ["100vh", "20vh"])

    const { lang } = useLang()

    const descriptionEN = (
        <div className="flex flex-col w-full text-left ml-[15px]">
            <h2 className="mb-[10px]">Hello world, I'm</h2>
            <h1 className="my-[0px]">Leandro Filipe Lourenço Carvalho, </h1>
            <h2 className="my-[0px]">a passionate Junior Full-Stack Developer</h2>
        </div>
    );

    const descriptionDE = (
        <div className="flex flex-col w-full text-left ml-[15px]">
            <h2 className="mb-[10px]">Hallo Welt! Ich bin</h2>
            <h1 className="my-[0px]">Leandro Filipe Lourenço Carvalho, </h1>
            <h2 className="my-[0px]">ein leidenschaftlicher Junior Full-Stack Entwickler</h2>
        </div>
    );

    const descriptionPT = (
        <div className="flex flex-col w-full text-left ml-[15px]">
            <h2 className="mb-[10px]">Olá mundo! Eu sou o</h2>
            <h1 className="my-[0px]">Leandro Filipe Lourenço Carvalho, </h1>
            <h2 className="my-[0px]">um desenvolvedor Full-Stack júnior entusiasta</h2>
        </div>
    );

    return (
        <motion.section
            className="hero relative w-full overflow-hidden"
            style={{ height }}>
            <motion.div
                className="hero-image absolute inset-0"
                style={{ opacity, scale }}
            >
                <motion.div
                    className="hero-overlay absolute inset-0 bg-black/50 pointer-events-none"
                    style={{ opacity: overlayOpacity }}
                />
            </motion.div>
            <motion.div
                className="w-[80%]"
                style={{ opacity, scale }}
            >
                <div className="hero-content z-20 flex flex-row h-full px-4">
                    <div className="flex flex-row h-full w-full items-center">
                        <div className="flex flex-col w-[90%] h-full">
                            <div className="flex flex-row space-x-8 h-fit justify-center ml-auto">
                                <StyleToggle />
                                <LanguageToggle />
                            </div>
                            <div className="flex flex-col my-auto">
                                <img src={logo} alt="Leandro Carvalho logo" className="max-w-[150px]" />
                                {getObjectByLangWithOrderedArray([descriptionDE, descriptionPT, descriptionEN], lang)}
                                <div className="bg-base-100 py-[10px] px-[20px] rounded-[3vw] text-base-content w-fit ml-[15px] mt-[15px]">
                                    <div className="flex flex-row gap-[10px]">
                                        <a className="w-[30px] h-[30px] rounded-[1vw] border p-[5px] hover:text-primary" href="https://github.com/LeandroCarvalho200409" target="_blank">
                                            <FaGithub className="w-[30px] h-[30px]" />
                                        </a>
                                        <a className="w-[30px] h-[30px] rounded-[1vw] border p-[5px] hover:text-primary" href="https://www.linkedin.com/in/leandro-filipe-lourenço-carvalho-23700b215" target="_blank">
                                            <FaLinkedin className="w-[30px] h-[30px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}