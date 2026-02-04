import { motion } from "framer-motion";
import "./Navbar.css";
import logoLight from "./../assets/Logo-primary-light.png";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar navbar-bg bg-opacity-80 fixed top-[20px] left-1/2 -translate-x-1/2 w-9/10 z-50 shadow-md rounded-[1.5vw] bg-primary"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex justify-between w-full px-4">
        <img className="ml-[15px]" src={logoLight} alt="Logo for light mode" width="80"></img>
      </div>
    </motion.nav>
  );
}