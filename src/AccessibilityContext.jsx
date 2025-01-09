import { createContext, useState, useEffect } from "react";
import { FontSizeProvider } from "./context/FontSizeContext"; // Import des FontSizeProviders

// 1. Context erstellen
export const AccessibilityContext = createContext();

// 2. Provider-Komponente
export function AccessibilityProvider({ children }) {
  const [isContrastMode, setIsContrastMode] = useState(false);
  const [isSpotlightActive, setIsSpotlightActive] = useState(false);
  const [highlightActive, setHighlightActive] = useState(false);
  const [areImagesHidden, setAreImagesHidden] = useState(false);
  const [isShortcutPopupOpen, setIsShortcutPopupOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(""); // Hintergrundfarbe speichern
  const [textColor, setTextColor] = useState(""); // Schriftfarbe speichern
  const [isSettingsPopupOpen, setIsSettingsPopupOpen] = useState(false); // Status für Settings-Popup

  // Schriftfarbe ändern und zurücksetzen
  const changeTextColor = (color) => {
    setTextColor((prevColor) => {
      if (prevColor === color) {
        document.body.style.color = "";
        return "";
      } else {
        document.body.style.color = color;
        return color;
      }
    });
  };

  const resetTextColor = () => {
    setTextColor("");
    document.body.style.color = "";
  };

  // Hintergrundfarbe ändern und zurücksetzen
  const changeBackgroundColor = (color) => {
    setBackgroundColor((prevColor) => {
      if (prevColor === color) {
        document.body.style.backgroundColor = "";
        return "";
      } else {
        document.body.style.backgroundColor = color;
        return color;
      }
    });
  };

  const resetBackgroundColor = () => {
    setBackgroundColor("");
    document.body.style.backgroundColor = "";
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
  const links = document.querySelectorAll("a");

  if (highlightActive) {
    links.forEach((link) => {
      link.style.border = "2px solid yellow";
      link.style.backgroundColor = "lightyellow";
      link.style.borderRadius = "4px";
      link.style.padding = "2px";
    });
  } else {
    links.forEach((link) => {
      link.style.border = "";
      link.style.backgroundColor = "";
      link.style.borderRadius = "";
      link.style.padding = "";
    });
  }
}, [highlightActive]);


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
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.id = overlayId;
      document.body.appendChild(overlay);
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      const overlay = document.getElementById(overlayId);
      if (overlay) overlay.remove();
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      const overlay = document.getElementById(overlayId);
      if (overlay) overlay.remove();
    };
  }, [isSpotlightActive]);

  const handleMouseMove = (event) => {
    const overlay = document.getElementById("spotlight-overlay");
    if (overlay) {
      const mouseY = event.clientY;
      overlay.style.setProperty("--spotlight-top", `${mouseY - 50}px`);
    }
  };

  const toggleContrastMode = () => {
    setIsContrastMode((prev) => !prev);
  };

  const resetContrastMode = () => {
    setIsContrastMode(false);
  };

  const toggleSpotlight = () => {
    setIsSpotlightActive((prev) => !prev);
  };

  const resetSpotlight = () => {
    setIsSpotlightActive(false);
  };

  const toggleHighlight = () => {
    setHighlightActive((prev) => !prev);
  };

  const resetHighlight = () => {
    setHighlightActive(false);
  };

  const toggleSettingsPopup = () => {
    setIsSettingsPopupOpen((prev) => !prev);
  };

  const resetSettingsPopup = () => {
    setIsSettingsPopupOpen(false);
  };

  return (
    <AccessibilityContext.Provider
      value={{
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
        isSettingsPopupOpen,
        toggleSettingsPopup,
        resetSettingsPopup,
      }}
    >
      <FontSizeProvider>{children}</FontSizeProvider>
    </AccessibilityContext.Provider>
  );
}
