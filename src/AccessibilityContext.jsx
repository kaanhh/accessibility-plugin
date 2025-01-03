import { createContext, useState, useEffect } from "react";

// 1. Context erstellen
export const AccessibilityContext = createContext();

// 2. Provider-Komponente
export function AccessibilityProvider({ children }) {
  // State für Schriftgröße
  const [fontSize, setFontSize] = useState(16);

  // State für Kontrast
  const [isContrastMode, setIsContrastMode] = useState(false);

  // Schriftgröße im DOM aktualisieren
  useEffect(() => {
    const content = document.querySelector(".main-content");
    if (content) {
      content.style.fontSize = `${fontSize}px`;
      content.style.transition = "font-size 0.3s ease";
    }
  }, [fontSize]);

  // Kontrastmodus im DOM aktualisieren
  useEffect(() => {
    if (isContrastMode) {
      document.body.classList.add("contrast-mode");
    } else {
      document.body.classList.remove("contrast-mode");
    }
  }, [isContrastMode]);

  // Funktionen zur Schriftgröße
  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 32));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  // Funktionen für den Kontrast
  const toggleContrastMode = () => {
    setIsContrastMode((prev) => !prev);
  };

  const resetContrastMode = () => {
    setIsContrastMode(false);
  };

  // Den Context mit Werten füllen
  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        isContrastMode,
        toggleContrastMode,
        resetContrastMode,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
