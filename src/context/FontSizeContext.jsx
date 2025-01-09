import { createContext, useState, useEffect } from "react";

export const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 32));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  // Schriftgröße im DOM aktualisieren
  useEffect(() => {
    const content = document.querySelector(".main-content");
    if (content) {
      content.style.fontSize = `${fontSize}px`;
      content.style.transition = "font-size 0.3s ease";
    }
  }, [fontSize]);

  return (
    <FontSizeContext.Provider
      value={{
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}
