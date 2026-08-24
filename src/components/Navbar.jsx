// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import logo from "./../assets/Logo-no-bg.png";
import "./Navbar.css";
import StyleToggle from "./utils/StyleToggle";
import LanguageToggle from "./utils/LanguageToggle";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {

  useEffect(() => {
    // Prevent horizontal scroll on mobile
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <motion.nav
      className="navbar navbar-bg fixed top-[15px] left-1/2 -translate-x-1/2 w-4/5 z-50 shadow-md rounded-[1.5vw] bg-neutral"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center w-full">
        <a href="#hero" className="flex-shrink-0 px-4">
          <img className="ml-[15px]" src={logo} alt="Logo for light mode" width="80"></img>
        </a>
        <div className="ml-[30px]">
        <button onClick={() => handleScroll("about")} className="btn btn-neutral no-underline">About me</button>
        <button onClick={() => handleScroll("skills")} className="btn btn-neutral no-underline">Skills</button>
        <button onClick={() => handleScroll("experience")} className="btn btn-neutral no-underline">Experience</button>
        <button onClick={() => handleScroll("education")} className="btn btn-neutral no-underline">Education</button>
        <button onClick={() => handleScroll("contact")} className="btn btn-neutral no-underline">Contact</button>
        </div>
        <div className="lg-navbar-content ml-auto flex flex-row flex-shrink-0">
          <StyleToggle />
          <LanguageToggle />
        </div>
      </div>

      <div className="drawer-wrapper drawer ml-auto">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle ml-auto bg-neutral" />
        <div className="drawer-content w-[50px] pr-[20px] ml-auto">
          {/* Page content here */}
          <label htmlFor="my-drawer-1" className="btn drawer-button ml-auto"><FiMenu /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 2</a></li>
            <li>
              <div className="flex flex-row">
                <StyleToggle />
                <LanguageToggle />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}