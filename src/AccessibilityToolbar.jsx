import { useState, useContext } from "react";
import "./assets/AccessibilityToolbar.css";
import { FontSizeContext } from "./context/FontSizeContext";

import {
  ContrastSwitch,
  FontSizeControls,
  HighlightLink2,
  CursorSize,
  Sidemap,
  ResetButton,
  ToggleImageButton,
  Settings,
  Test,
} from "./components";
import {
  linklink,
  focus,
  node,
  reset,
  image,
  accessibilityIcon,
  settingsIcon,
  reset as resetIcon,
} from "./assets";
import { AccessibilityContext } from "./AccessibilityContext"; // Import aus AccessibilityContext

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Funktionen aus AccessibilityContext
  const {
    resetContrastMode,
    resetSpotlight,
    resetHighlight,
    resetShortcutPopup,
    resetImageVisibility,
  } = useContext(AccessibilityContext);

  // Funktionen aus FontSizeContext
  const {
    resetFontSize, // Hinzugefügt, um Schriftgröße zurückzusetzen
  } = useContext(FontSizeContext);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  // Kombinierter Reset-Handler für den großen Reset-Button
  const handleReset = () => {
    resetFontSize(); // Schriftgröße zurücksetzen
    resetContrastMode(); // Kontrastmodus zurücksetzen
    resetSpotlight(); // Spotlight zurücksetzen
    resetHighlight(); // Highlight zurücksetzen
    resetShortcutPopup(); // Shortcut-Popup zurücksetzen
    resetImageVisibility(); // Bildsichtbarkeit zurücksetzen
  };

  return (
    <div className="accessibility-plugin">
      {/* Haupt-Button zum Öffnen des Tools */}
      <button
        className="accessibility-button p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={togglePopup}
        aria-label="Barrierefreiheitstool öffnen"
      >
        <img
          src={accessibilityIcon}
          alt="Barrierefreiheit Icon"
          className="w-10 h-10"
        />
      </button>

      {/* Accessibility-Popup */}
      {isOpen && (
        <div className="accessibility-popup border border-gray-300 rounded p-4 shadow-md lg:max-h-[70vh] overflow-y-auto">
          {/* Icons oben */}
          <div className="flex justify-between">
            {/* Reset-Icon (links) */}
            <button
              className="reset-icon w-12 h-12 flex !bg-white items-center rounded-full"
              style={{ width: "28%" }}
              onClick={handleReset} // Kombinierter Reset-Handler
              aria-label="Alles zurücksetzen"
            >
              <img src={resetIcon} alt="Reset Icon" className="w-8 h-8 " />
            </button>

            {/* Settings-Icon (rechts) */}
            <Settings icon={settingsIcon} />
          </div>

          {/* Menüelemente */}
          <div className="menu">
          <ContrastSwitch />
          
          </div>
          <HighlightLink2 icon={linklink} />
          <FontSizeControls />
          <CursorSize icon={focus} />
          <Sidemap icon={node} />
          <ToggleImageButton icon={image} />
          <Test />
          <ResetButton icon={reset} onClick={handleReset} />
        </div>
      )}

      {/* Einstellungen-Popup */}
      {isSettingsOpen && (
        <div className="shortcut-popup">
          <div className="popup-header">
            <h2>Einstellungen</h2>
            <button
              onClick={toggleSettings}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              X
            </button>
          </div>
          <p>Hier können weitere Einstellungen hinzugefügt werden.</p>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;
