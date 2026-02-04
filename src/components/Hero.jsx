import { motion, useScroll, useTransform } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoSunny } from "react-icons/io5";
import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero({ lang, setLang }) {

    const [styleMode, setStyleMode] = useState("light");

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 0]);
    const height = useTransform(scrollYProgress, [0, 1], ["100vh", "20vh"])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', styleMode);
    }, [styleMode])

    const getIconStyle = () => {
        if (styleMode === "light") {
            return <IoSunny />
        }
        return <MdDarkMode />
    }

    const toggleStyle = () => {
        console.log("Toggle")
        if (styleMode == "light") {
            console.log("was light")
            setStyleMode("dark");
            document.documentElement.setAttribute('data-theme', "dark");
        } else {
            setStyleMode("light");
            document.documentElement.setAttribute('data-theme', "light");
        }
    }

    return (
        <motion.section className="hero relative w-full overflow-hidden" style={{ height }}>
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
                style={{ opacity, scale }}
            >
                <div className="hero-content relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                <div className="flex flex-row space-x-8 w-full justify-center mb-4">
                    <div>
                        <button className="btn btn-primary text-lg px-8" onClick={() => toggleStyle()}>{getIconStyle()}</button>
                    </div>
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-primary m-1">{BiWorld()}</div>
                        <ul tabIndex="-1" className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={() => setLang("DE")}><a className={`cursor-pointer ${lang == "DE" ? "bg-primary text-primary-content font-bold hover:bg-accent" : "bg-secondary hover:bg-accent hover:text-secondary-content"}`}>DE</a></li>
                            <li onClick={() => setLang("PT")}><a className={`cursor-pointer ${lang == "PT" ? "bg-primary text-primary-content font-bold hover:bg-accent" : "bg-secondary hover:bg-accent hover:text-secondary-content"}`}>PT</a></li>
                            <li onClick={() => setLang("EN")}><a className={`cursor-pointer ${lang == "EN" ? "bg-primary text-primary-content font-bold hover:bg-accent" : "bg-secondary hover:bg-accent hover:text-secondary-content"}`}>EN</a></li>
                        </ul>
                    </div>
                </div>

                <h1>Leandro Filipe Lourenço Carvalho</h1>
                <p>Junior Full-Stack Developer</p>
            </div>
            </motion.div>
        </motion.section>
    );
}