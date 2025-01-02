
import { useState } from "react";
import "./assets/AccessibilityToolbar.css";
import { ContrastSwitch, FontSizeControls, HighlightLink2, CursorSize ,menuData} from "./components";
import { contrastIcon, linklink, focus, node } from "./assets";

menuData[0].icon = contrastIcon;

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContrastMode, setIsContrastMode] = useState(false); // Zustand für Kontrastmodus
  const [isShortcutPopupOpen, setIsShortcutPopupOpen] = useState(false); // Zustand für Shortcuts-Popup
  const [htmlStructure, setHtmlStructure] = useState([]); // Zustand für die HTML-Struktur

  const [activeSubmenu, setActiveSubmenu] = useState(null);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleContrastMode = () => {
    setIsContrastMode(!isContrastMode);
    document.body.classList.toggle("contrast-mode", !isContrastMode); // Klasse auf <body> anwenden
  };

  const toggleShortcutPopup = () => {
    setIsShortcutPopupOpen(!isShortcutPopupOpen);

    // Wenn das Popup geöffnet wird, die HTML-Struktur dynamisch sammeln
    if (!isShortcutPopupOpen) {
      const tags = ["main", "header", "section", "footer", "nav"];
      const foundElements = [];

      tags.forEach((tag) => {
        const elements = document.querySelectorAll(tag); // Alle Elemente des Tags finden
        elements.forEach((element, index) => {
          foundElements.push({
            tag,
            id: element.id || `Keine ID (${index + 1})`, // ID oder eindeutiger Hinweis, falls keine ID vorhanden
            element,
          });
        });
      });

      console.log("Alle gesammelten Elemente:", foundElements); // Debugging
      setHtmlStructure(foundElements); // Alle gesammelten Elemente speichern
    }
  };

  const scrollToElement = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsShortcutPopupOpen(false); // Popup schließen
  };

  return (
    <div className="accessibility-plugin">
      {/* Button zum Öffnen/Schließen der Toolbar */}
      <button className="accessibility-button" onClick={togglePopup}>
        ♿
      </button>

      {/* Popup mit Funktionen */}
      {isOpen && (
        <div className="accessibility-popup caution-border">

        <div className="menu">
          {menuData.map((menuItem, index) => (
            <div key={index} className="menu-item">
              {/* Haupt-Button mit Label, Pfeil und Icon */}
              <button
                className="flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                onClick={() => toggleContrastMode()} // Aktiviert den Kontrastmodus
              >
                {/* Linker Bereich: Label und Pfeil */}
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
                  src={contrastIcon} // Direktes Icon
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
          ))}
        </div>


          {/* Schriftgrößen-Komponente */}
          <FontSizeControls />

          <button className="flex items-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <HighlightLink2 />
            <img src={linklink} alt="Link-Highlight-Icon" className="w-10 h-10 ml-2" />
          </button>

          <button className="flex items-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <CursorSize />
            <img src={focus} alt="Cursor-Fokus-Icon" className="w-15 h-16 ml-2" />
          </button>

          <button
            className="toolbar-button flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
            onClick={toggleShortcutPopup}
          >
            {isContrastMode ? "Sitemap deaktivieren" : "Sidemap"}
            <img src={node} alt="Cursor-Fokus-Icon" className="w-15 h-11 ml-2" />
          </button>

          {/* Spracheinstellungen */}
          <button
            className="toolbar-button"
            onClick={() => console.log("Sprache geändert")}
          >
            Sprache ändern
          </button>
        </div>
      )}

      {/* Shortcuts-Popup */}
      {isShortcutPopupOpen && (
        <div className="shortcut-popup">
          <div className="popup-header">
            <h2>Seitenstruktur</h2>
            <button onClick={toggleShortcutPopup}>X</button>
          </div>
          <ul>
            {htmlStructure.map((el, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToElement(el.element)}
                  className="shortcut-item"
                >
                  {el.tag.toUpperCase()} - {el.id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;