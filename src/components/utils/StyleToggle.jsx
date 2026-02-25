import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "./ThemeContext";

export default function StyleToggle() {
  const { styleMode, setStyleMode } = useTheme();

  const toggleStyle = () => {
    setStyleMode(prev => (prev === "nord" ? "business" : "nord"));
  };

  return (
    <button onClick={toggleStyle} className="btn btn-primary-content text-lg px-8">
      {styleMode === "nord" ? <IoSunny /> : <MdDarkMode />}
    </button>
  );
}
