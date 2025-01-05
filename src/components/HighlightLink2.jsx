import { useContext } from "react";
import { AccessibilityContext } from "../AccessibilityContext"; // Import des Contexts

const HighlightLink2 = ({ icon }) => {
  const { highlightActive, toggleHighlight } = useContext(AccessibilityContext);

  return (
    <button
      className="toolbar-button flex justify-between text-lg items-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
      onClick={toggleHighlight} // Context-Funktion verwenden
    >
      {/* Text */}
      <span>{highlightActive ? "Link an" : "Links aus"}</span>

      {/* Icon */}
      {icon && <img src={icon} alt="Highlight Icon" className="w-10 h-10" />}
    </button>
  );
};

export default HighlightLink2;
