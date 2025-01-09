import { useContext } from "react";
import { AccessibilityContext } from "../AccessibilityContext"; // Context importieren

const CursorSize = ({ icon }) => {
  // Zugriff auf Spotlight-Funktionen und Status aus dem Context
  const { isSpotlightActive, toggleSpotlight } = useContext(AccessibilityContext);

  return (
    <button
      className="flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
      onClick={toggleSpotlight}
    >
      {/* Text */}
      <span>{isSpotlightActive ? "Spotlight an" : "Spotlight"}</span>

      {/* Icon */}
      {icon && <img src={icon} alt="Spotlight Icon" className="w-10 h-10" />}
    </button>
  );
};

export default CursorSize;
