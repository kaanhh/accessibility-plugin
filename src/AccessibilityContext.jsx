import { createContext, useState, useEffect } from "react";

// 1. Context erstellen
export const AccessibilityContext = createContext();

// 2. Provider-Komponente
export function AccessibilityProvider({ children }) {
  const [fontSize, setFontSize] = useState(16);
  const [isContrastMode, setIsContrastMode] = useState(false);
  const [isSpotlightActive, setIsSpotlightActive] = useState(false);
  const [highlightActive, setHighlightActive] = useState(false);
  const [areImagesHidden, setAreImagesHidden] = useState(false);
  const [isShortcutPopupOpen, setIsShortcutPopupOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(""); // Hintergrundfarbe speichern
  const [textColor, setTextColor] = useState(""); // Schriftfarbe speichern

  // Schriftfarbe ändern und zurücksetzen
  const changeTextColor = (color) => {
    setTextColor((prevColor) => {
      if (prevColor === color) {
        // Wenn die gleiche Farbe ausgewählt wurde, Textfarbe zurücksetzen
        document.body.style.color = ""; // Standardfarbe (z. B. Schwarz)
        return ""; // Textfarbe zurücksetzen
      } else {
        // Textfarbe ändern
        document.body.style.color = color;
        return color;
      }
    });
  };
  

  const resetTextColor = () => {
    setTextColor(""); // Standardwert
    document.body.style.color = ""; // Schriftfarbe zurücksetzen
  };

  // Hintergrundfarbe ändern und zurücksetzen
  const changeBackgroundColor = (color) => {
    setBackgroundColor((prevColor) => {
      if (prevColor === color) {
        // Wenn die gleiche Farbe ausgewählt wurde, Hintergrund zurücksetzen
        document.body.style.backgroundColor = ""; // Standardfarbe
        return ""; // Hintergrundfarbe zurücksetzen
      } else {
        // Hintergrundfarbe ändern
        document.body.style.backgroundColor = color;
        return color;
      }
    });
  };

  const resetBackgroundColor = () => {
    setBackgroundColor(""); // Zurücksetzen
    document.body.style.backgroundColor = ""; // Standardfarbe
  };

  // Shortcut Popup
  const toggleShortcutPopup = () => {
    setIsShortcutPopupOpen((prev) => !prev);
  };
  const resetShortcutPopup = () => {
    setIsShortcutPopupOpen(false);
  };

  // Bildsichtbarkeit
  const toggleImageVisibility = () => {
    setAreImagesHidden((prev) => !prev);
  };
  const resetImageVisibility = () => {
    setAreImagesHidden(false);
  };

  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (areImagesHidden) {
        img.style.display = "none";
      } else {
        img.style.display = "";
      }
    });
  }, [areImagesHidden]);

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

  // Spotlight-Overlay aktualisieren
  useEffect(() => {
    const overlayId = "spotlight-overlay";

    if (isSpotlightActive) {
      // Overlay hinzufügen
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.id = overlayId;
      document.body.appendChild(overlay);

      // Mausbewegung überwachen
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      // Overlay entfernen
      const overlay = document.getElementById(overlayId);
      if (overlay) overlay.remove();

      // Mausbewegung stoppen
      document.removeEventListener("mousemove", handleMouseMove);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      const overlay = document.getElementById(overlayId);
      if (overlay) overlay.remove();
    };
  }, [isSpotlightActive]);

  // Highlight-Links aktualisieren
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (highlightActive) {
        link.classList.add(
          "border",
          "border-yellow-400",
          "bg-yellow-200",
          "rounded",
          "p-1"
        );
      } else {
        link.classList.remove(
          "border",
          "border-yellow-400",
          "bg-yellow-200",
          "rounded",
          "p-1"
        );
      }
    });
  }, [highlightActive]);

  // Mausbewegung verfolgen
  const handleMouseMove = (event) => {
    const overlay = document.getElementById("spotlight-overlay");
    if (overlay) {
      const mouseY = event.clientY;
      overlay.style.setProperty("--spotlight-top", `${mouseY - 50}px`);
    }
  };

  // Schriftgröße
  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 32));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  // Kontrastmodus
  const toggleContrastMode = () => {
    setIsContrastMode((prev) => !prev);
  };

  const resetContrastMode = () => {
    setIsContrastMode(false);
  };

  // Spotlight
  const toggleSpotlight = () => {
    setIsSpotlightActive((prev) => !prev);
  };

  const resetSpotlight = () => {
    setIsSpotlightActive(false);
  };

  // Highlight-Links
  const toggleHighlight = () => {
    setHighlightActive((prev) => !prev);
  };

  const resetHighlight = () => {
    setHighlightActive(false);
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
        isSpotlightActive,
        toggleSpotlight,
        resetSpotlight,
        highlightActive,
        toggleHighlight,
        resetHighlight,
        isShortcutPopupOpen,
        toggleShortcutPopup,
        resetShortcutPopup,
        areImagesHidden,
        toggleImageVisibility,
        resetImageVisibility,
        backgroundColor,
        changeBackgroundColor,
        resetBackgroundColor,
        textColor,
        changeTextColor,
        resetTextColor,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
