import { useContext } from "react"; // useContext importieren
import "../assets/contrast.css"; // Import der CSS-Datei
import { contrastIcon } from "../assets"; // Icon importieren
import { AccessibilityContext } from "../AccessibilityContext"; // Context importieren

const ContrastSwitch = () => {
  // Zugriff auf den Context
  const { isContrastMode, toggleContrastMode } = useContext(AccessibilityContext);

  return (
    <div className="menu-item">
      <button
        className={`flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 ${
          isContrastMode ? "contrast-active" : ""
        }`} // Dynamische Klasse für aktiven Zustand
        onClick={toggleContrastMode} // Context-Funktion für Umschalten des Kontrasts
      >
        <span>Kontrast umschalten</span>
        <img
          src={contrastIcon}
          alt="Kontrast Icon"
          className="w-10 h-10"
        />
      </button>
    </div>
  );
};

export default ContrastSwitch;
