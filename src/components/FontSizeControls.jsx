import { useContext } from "react";
import resetIcon from "../assets/reset.png";
import { AccessibilityContext } from "../AccessibilityContext"; // Pfad ggf. anpassen

// Keine Props mehr nötig, weil wir "fontSize" & Co. aus dem Context holen
const FontSizeControls = () => {
  // State und Funktionen direkt aus dem AccessibilityContext
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize
  } = useContext(AccessibilityContext);

  return (
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm font-bold mr-4">Schriftgröße:</span>
      <div className="flex">
        {/* Kleiner Reset-Button (ruft resetFontSize aus dem Context auf) */}
        <button
          className="bg-gray-100 text-gray-800 py-2 px-4 rounded-r hover:bg-gray-200"
          onClick={resetFontSize}
        >
          <img src={resetIcon} alt="Reset Icon" className="w-4 h-4" />
        </button>

        {/* - Button */}
        <button
          className="bg-gray-100 text-gray-800 py-2 px-4 rounded-l hover:bg-gray-200 border-r"
          onClick={decreaseFontSize}
        >
          -
        </button>

        {/* + Button */}
        <button
          className="bg-gray-100 text-gray-800 py-2 px-4 rounded-r hover:bg-gray-200"
          onClick={increaseFontSize}
        >
          +
        </button>
      </div>
    </div>
  );
};

// Falls du diese Funktion weiterhin für externen Legacy-Reset brauchst, lass sie drin.
// Ansonsten kann sie entfernt werden, da "resetFontSize" bereits im Context ist.
export const resetFontSize = () => {
  const content = document.querySelector(".main-content");
  if (content) {
    content.style.fontSize = "16px"; 
    content.style.transition = "none";
  }
};

export default FontSizeControls;
