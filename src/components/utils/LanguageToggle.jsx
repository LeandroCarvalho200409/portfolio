import { BiWorld } from "react-icons/bi";
import { useLang } from "./LanguageContext";

export default function LanguageToggle() {
    const { lang, setLang } = useLang();

    return (
        <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-primary-content mx-[5px] h-[38.5px]">{BiWorld()}</div>
            <ul tabIndex="-1" className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={() => setLang("DE")}><a className={`cursor-pointer ${lang == "DE" ? "bg-primary text-primary-content font-bold hover:bg-accent" : "bg-secondary hover:bg-accent hover:text-secondary-content"}`}>DE</a></li>
                <li onClick={() => setLang("PT")}><a className={`cursor-pointer ${lang == "PT" ? "bg-primary text-primary-content font-bold hover:bg-accent" : "bg-secondary hover:bg-accent hover:text-secondary-content"}`}>PT</a></li>
                <li onClick={() => setLang("EN")}><a className={`cursor-pointer ${lang == "EN" ? "bg-primary text-primary-content font-bold hover:bg-accent" : "bg-secondary hover:bg-accent hover:text-secondary-content"}`}>EN</a></li>
            </ul>
        </div>
    );
}