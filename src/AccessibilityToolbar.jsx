import { useState, useContext } from "react";
import "./assets/AccessibilityToolbar.css";
import {
  ContrastSwitch,
  FontSizeControls,
  HighlightLink2,
  CursorSize,
  menuData,
  Sidemap,
  ResetButton,
  ToggleImageButton, 
} from "./components";
import { linklink, focus, node, reset, image , accessibilityIcon} from "./assets";
import { AccessibilityContext } from "./AccessibilityContext";

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Zugriff auf den Context
  const {
    resetFontSize,
    resetContrastMode,
    resetSpotlight,
    resetHighlight,
    resetShortcutPopup,
    resetImageVisibility,
  } = useContext(AccessibilityContext);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleReset = () => {
    resetFontSize(); // Schriftgröße zurücksetzen
    resetContrastMode(); // Kontrast zurücksetzen
    resetSpotlight(); // Spotlight zurücksetzen
    resetHighlight(); // Highlight zurücksetzen
    resetShortcutPopup(); // Shortcut-Popup zurücksetzen
    resetImageVisibility(); // Bilder einblenden
  };

  return (
    <div className="accessibility-plugin">
      <button
        className="accessibility-button p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={togglePopup}
        aria-label="Barrierefreiheitstool öffnen"
      >
        <img
          src={accessibilityIcon}
          alt="Barrierefreiheit Icon"
          className="w-8 h-8"
        />
      </button>

      {isOpen && (
        <div className="accessibility-popup">
          <div className="menu">
            <ContrastSwitch />
          </div>

          <FontSizeControls />
          <HighlightLink2 icon={linklink} />
          <CursorSize icon={focus} />
          <Sidemap icon={node} />
          <ToggleImageButton icon={image} /> 
          <ResetButton icon={reset} onClick={handleReset} />
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;
