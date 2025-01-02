import { useState } from "react";
import "../assets/contrast.css"; // Import der CSS-Datei
import { contrastIcon } from "../assets"; // Icon importieren

const ContrastSwitch = ({ menuItem, index, activeSubmenu, setActiveSubmenu }) => {
  const [isContrastMode, setIsContrastMode] = useState(false);

  const toggleContrastMode = () => {
    setIsContrastMode((prevMode) => !prevMode);
    if (!isContrastMode) {
      document.body.classList.add("contrast-mode");
    } else {
      document.body.classList.remove("contrast-mode");
    }
  };

  return (
    <div className="menu-item">
      <button
        className="flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        onClick={toggleContrastMode}
      >
        {/* Linker Bereich: Label und Dropdown-Pfeil */}
        <span className="flex items-center">
          {menuItem.label}
          <span
            className="dropdown-arrow ml-2"
            onClick={(e) => {
              e.stopPropagation(); // Verhindert Auslösen des Hauptbuttons
              setActiveSubmenu(activeSubmenu === index ? null : index); // Öffnet/Schließt Submenu
            }}
          >
            {activeSubmenu === index ? "▲" : "▼"}
          </span>
        </span>

        {/* Rechter Bereich: Icon */}
        <img
          src={contrastIcon}
          alt={`${menuItem.label} Icon`}
          className="w-10 h-10"
        />
      </button>

      {/* Submenu */}
      {activeSubmenu === index && menuItem.submenu && (
        <div className="submenu">
          {menuItem.submenu.map((subItem, subIndex) => (
            <button key={subIndex} className="submenu-button">
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContrastSwitch;
