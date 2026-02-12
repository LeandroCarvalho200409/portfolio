import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./Skills.css"

export default function SkillsDE() {

    const controls = useAnimation();
    const scrollDuration = 20;

    useEffect(() => {
        controls.start({
            x: ["0%", "-100%"],
            transition: { duration: scrollDuration, ease: "linear", repeat: Infinity },
        });
    }, [controls]);

    const handleMouseEnter = () => controls.stop();
    const handleMouseLeave = () => 
        controls.start({
            x: ["0%", "-100%"],
            transition: { duration: scrollDuration, ease: "linear", repeat: Infinity },
    });

    const techs = [
        "Java",
        "Kotlin",
        "React",
        "Angular",
        "Express.js",
        "Elixir",
        "Haskell",
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Python",
        "AppDynamics",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "Figma"
    ]


    return (
        <section className="flex flex-col items-center w-[70%] mx-auto" style={{ minHeight: "50vh" }}>
            <h1>Technologien</h1>

            <div className="overflow-hidden w-full py-4">
                <motion.div
                    className="flex space-x-8"
                    animate={controls}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Doppelte Reihe für nahtlosen Loop */}
                    {[...techs, ...techs].map((tech, i) => (
                        <div
                            key={i}
                            className="tech-item h-[100px] w-[100px] px-4 py-2 shadow-md min-w-[100px] flex items-center justify-center hover:cursor-pointer hover:bg-primary hover:text-primary-content"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}