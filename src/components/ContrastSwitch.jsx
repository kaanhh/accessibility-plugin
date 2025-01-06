import { useContext, useState } from "react";
import "../assets/contrast.css";
import { contrastIcon } from "../assets";
import { AccessibilityContext } from "../AccessibilityContext";

const ContrastSwitch = () => {
  // Kontext importieren
  const { 
    isContrastMode, 
    toggleContrastMode, 
    changeBackgroundColor, 
    changeTextColor 
  } = useContext(AccessibilityContext);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Funktion zum Umschalten des Submenüs
  const toggleSubmenu = (e) => {
    e.stopPropagation(); // Verhindert Konflikte mit dem Hauptbutton
    setIsSubmenuOpen((prev) => !prev);
  };

  return (
    <div className="menu-item">
      {/* Hauptbutton für Kontrast */}
      <button
        className={`flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 w-full ${
          isContrastMode ? "contrast-active" : ""
        }`}
        onClick={toggleContrastMode} // Kontextfunktion für Kontrast-Toggle
      >
        <span className="flex items-center">
          {/* Pfeil-Button für Submenü */}
          <span
            className={`mr-2 transform transition-transform ${
              isSubmenuOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleSubmenu} // Nur Submenü toggeln
          >
            ▼
          </span>
          Kontrast umschalten
        </span>
        <img
          src={contrastIcon}
          alt="Kontrast Icon"
          className="w-10 h-10"
        />
      </button>

      {/* Submenü */}
      {isSubmenuOpen && (
        <div className="bg-gray-100 border border-gray-300 rounded mt-2 mb-2 p-2 w-full">
          {/* Hintergrundfarben */}
          <button
            className="submenu-item p-2 rounded hover:bg-gray-200 w-full text-left"
            onClick={() => console.log("Option 1 ausgewählt")}
          >
            Hintergrundfarbe
            <div className="flex justify-start space-x-2 mt-2">
              <div
                className="w-8 h-8 rounded-lg bg-red-500 cursor-pointer flex items-center justify-center text-white font-bold"
                title="Roter Hintergrund"
                onClick={() => changeBackgroundColor("red")}
              >
                T
              </div>
              <div
                className="w-8 h-8 rounded-lg bg-blue-500 cursor-pointer flex items-center justify-center text-white font-bold"
                title="Blauer Hintergrund"
                onClick={() => changeBackgroundColor("blue")}
              >
                T
              </div>
              <div
                className="w-8 h-8 rounded-lg bg-green-500 cursor-pointer flex items-center justify-center text-white font-bold"
                title="Grüner Hintergrund"
                onClick={() => changeBackgroundColor("green")}
              >
                T
              </div>
              <div
                className="w-8 h-8 rounded-lg bg-yellow-500 cursor-pointer flex items-center justify-center text-white font-bold"
                title="Gelber Hintergrund"
                onClick={() => changeBackgroundColor("yellow")}
              >
                T
              </div>
              <div
                className="w-8 h-8 rounded-lg bg-purple-500 cursor-pointer flex items-center justify-center text-white font-bold"
                title="Lila Hintergrund"
                onClick={() => changeBackgroundColor("purple")}
              >
                T
              </div>
            </div>
          </button>

          {/* Schriftfarben */}
          <button
            className="submenu-item p-2 rounded hover:bg-gray-200 w-full text-left"
            onClick={() => console.log("Option 2 ausgewählt")}
          >
            Schriftfarbe
            <div className="flex justify-start space-x-2 mt-2">
            <div
              className="w-8 h-8 rounded-lg border-2 bg-white cursor-pointer flex items-center justify-center text-red-500 font-bold border-red-500"
              title="Rote Schrift"
              onClick={() => changeTextColor("red")}
            >
              T
            </div>
            <div
              className="w-8 h-8 rounded-lg border-2 bg-white cursor-pointer flex items-center justify-center text-blue-500 font-bold border-blue-500"
              title="Blaue Schrift"
              onClick={() => changeTextColor("blue")}
            >
              T
            </div>
            <div
              className="w-8 h-8 rounded-lg border-2 bg-white cursor-pointer flex items-center justify-center text-green-500 font-bold border-green-500"
              title="Grüne Schrift"
              onClick={() => changeTextColor("green")}
            >
              T
            </div>
            <div
              className="w-8 h-8 rounded-lg border-2 bg-white cursor-pointer flex items-center justify-center text-yellow-500 font-bold border-yellow-500"
              title="Gelbe Schrift"
              onClick={() => changeTextColor("yellow")}
            >
              T
            </div>
            <div
              className="w-8 h-8 rounded-lg border-2 bg-white cursor-pointer flex items-center justify-center text-purple-500 font-bold border-purple-500"
              title="Lila Schrift"
              onClick={() => changeTextColor("purple")}
            >
              T
            </div>

            </div>
          </button>

          {/* Graustufen */}
          <button
            className="submenu-item p-2 rounded hover:bg-gray-200 w-full text-left"
            onClick={() => console.log("Option 3 ausgewählt")}
          >
            Graustufe
          </button>
        </div>
      )}
    </div>
  );
};

export default ContrastSwitch;
