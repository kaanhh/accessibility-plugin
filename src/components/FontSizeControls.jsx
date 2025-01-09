import { useContext, useState } from "react";
import resetIcon from "../assets/reset2.png";
import arrowIcon from "../assets/arrow.png";
import { FontSizeContext } from "../context/FontSizeContext"; // Pfad zum neuen FontSizeContext

const FontSizeControls = () => {
  // State und Funktionen direkt aus dem FontSizeContext
  const {
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  } = useContext(FontSizeContext);

  // Zustand für Submenü
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Funktion zum Umschalten des Submenüs
  const toggleSubmenu = (e) => {
    e.stopPropagation(); // Verhindert Konflikte
    setIsSubmenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      {/* Hauptbereich */}
      <div className="flex items-center w-full">
        {/* Linker Bereich: Arrow und Text */}
        <div className="flex items-center flex-grow">
          {/* Arrow */}
          <span
            className={`transform transition-transform ${
              isSubmenuOpen ? "rotate-180" : "rotate-0"
            } cursor-pointer`}
            onClick={toggleSubmenu}
            style={{ lineHeight: "1", verticalAlign: "middle" }} // Arrow-Höhe anpassen
          >
            <img
              src={arrowIcon}
              alt="Submenü öffnen/schließen"
              className="w-5 h-5"
            />
          </span>

          {/* Text mit Abstand */}
          <span className="text-sm font-bold pl-2">Schriftgröße:</span>
        </div>

        {/* Rechter Bereich: Buttons */}
        <div className="flex">
          {/* Reset-Button */}
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

      {/* Submenü */}
      {isSubmenuOpen && (
        <div className="bg-gray-100 border border-gray-300 rounded mb-2 mt-2 p-2 w-full">
          {/* Submenü-Buttons (Platzhalter) */}
          <button
            className="submenu-item p-2 rounded hover:bg-gray-200 w-full text-left"
            onClick={() => console.log("Option 1 ausgewählt")}
          >
            ZEILENABSTAND
          </button>
          <button
            className="submenu-item p-2 rounded hover:bg-gray-200 w-full text-left"
            onClick={() => console.log("Option 2 ausgewählt")}
          >
            Option 2
          </button>
          <button
            className="submenu-item p-2 rounded hover:bg-gray-200 w-full text-left"
            onClick={() => console.log("Option 3 ausgewählt")}
          >
            Option 3
          </button>
        </div>
      )}
    </div>
  );
};

export default FontSizeControls;
