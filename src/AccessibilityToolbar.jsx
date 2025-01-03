import { useState, useContext } from "react";
import "./assets/AccessibilityToolbar.css";
import {
  ContrastSwitch,
  FontSizeControls,
  HighlightLink2,
  CursorSize,
  menuData,
  Sidemap,
  ResetButton
} from "./components";
import { linklink, focus, node, reset } from "./assets";
import { AccessibilityContext } from "./AccessibilityContext";

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Zugriff auf den Context
  const { resetFontSize, resetContrastMode } = useContext(AccessibilityContext);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleReset = () => {
    resetFontSize(); // Schriftgröße zurücksetzen
    resetContrastMode(); // Kontrast zurücksetzen
  };

  return (
    <div className="accessibility-plugin">
      <button className="accessibility-button" onClick={togglePopup}>
        ♿
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
          <ResetButton icon={reset} onClick={handleReset} />
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;
