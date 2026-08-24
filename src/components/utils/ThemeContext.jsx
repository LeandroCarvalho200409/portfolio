// ThemeContext.js
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [styleMode, setStyleMode] = useState(() => {
    return localStorage.getItem("style") || "nord";
  });

  // Immer sync mit DOM + localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", styleMode);
    localStorage.setItem("style", styleMode);
  }, [styleMode]);

  return (
    <ThemeContext.Provider value={{ styleMode, setStyleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook für einfachen Zugriff
export function useTheme() {
  return useContext(ThemeContext);
}
