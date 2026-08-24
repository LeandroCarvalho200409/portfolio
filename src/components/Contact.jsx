import { useLang } from "./utils/LanguageContext"
import { getObjectByLangWithOrderedArray } from "./utils/Utils"
import { FaGithub, FaIdCardAlt, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";

export default function Contact() {

    const { lang } = useLang()

    const titles = [
        "Lass uns kennenlernen!",
        "Vamos nos conhecer?",
        "Let's get in touch!"
    ]

    return (
        <section id="contact" className="flex flex-col items-center w-[70%] mx-auto mt-[100px]" style={{ minHeight: "20vh" }}>

            <div className="bg-secondary py-[20px] px-[50px] rounded-[1vw] text-base-content w-fit ml-[15px] mt-[15px] flex flex-col items-center">
                <h1>{getObjectByLangWithOrderedArray(titles, lang)}</h1>
                <p className="text-secondary-content">
                    <FaIdCardAlt className="w-[20px] h-[20px] mr-[15px]"/>
                    Leandro Filipe Lourenço Carvalho
                </p>
                <p className="text-secondary-content">
                    
                    <FaMapLocation className="w-[20px] h-[20px] mr-[15px]"/>
                    Zürich, Switzerland | Braga, Portugal
                </p>
                <div className="flex flex-row gap-[10px] mt-[10px]">
                    <a className="w-[30px] h-[30px] rounded-[1vw] border p-[5px] hover:text-primary text-secondary-content" href="https://github.com/LeandroCarvalho200409" target="_blank">
                        <FaGithub className="w-[30px] h-[30px]" />
                    </a>
                    <a className="w-[30px] h-[30px] rounded-[1vw] border p-[5px] hover:text-primary text-secondary-content" href="https://www.linkedin.com/in/leandro-filipe-lourenço-carvalho-23700b215" target="_blank">
                        <FaLinkedin className="w-[30px] h-[30px]" />
                    </a>
                    <a className="w-[30px] h-[30px] rounded-[1vw] border p-[5px] hover:text-primary text-secondary-content" href="mailto:leandro.carvalho@gmail.com?subject=Contact%20portfolio&body=Hello%20there!" target="_blank">
                        <MdMail className="w-[30px] h-[30px]" />
                    </a>
                </div>
            </div>

        </section>
    )
}