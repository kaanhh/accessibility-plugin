import React, { useContext } from "react";
import { AccessibilityContext } from "../AccessibilityContext"; // Context importieren

const ToggleImageButton = ({ icon }) => {
  // Zugriff auf den State und die Funktion aus dem Context
  const { areImagesHidden, toggleImageVisibility } = useContext(AccessibilityContext);

  return (
    <button
      className="toolbar-button flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
      onClick={toggleImageVisibility} // Funktion aus dem Context
    >
      {/* Text */}
      <span>Bilder {areImagesHidden ? "anzeigen" : "ausblenden"}</span>

      {/* Icon */}
      {icon && <img src={icon} alt="Bilder-Icon" className="w-10 h-10 ml-2" />}
    </button>
  );
};

export default ToggleImageButton;
