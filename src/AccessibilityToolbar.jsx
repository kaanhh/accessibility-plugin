import { useState } from "react";
import "./assets/AccessibilityToolbar.css";
import { ContrastSwitch, FontSizeControls, HighlightLink2, CursorSize, Sidemap, menuData } from "./components";
import { linklink, focus, node } from "./assets";

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
              <ContrastSwitch
                key={index}
                menuItem={menuItem}
                index={index}
                activeSubmenu={activeSubmenu}
                setActiveSubmenu={setActiveSubmenu}
              />
            ))}
          </div>

          {/* Schriftgrößen-Komponente */}
          <FontSizeControls />

          <button className="flex items-center text-lg p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <HighlightLink2 />
            <img src={linklink} alt="Link-Highlight-Icon" className="w-10 h-10 ml-2" />
          </button>

          <button className="flex items-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            <CursorSize />
            <img src={focus} alt="Cursor-Fokus-Icon" className="w-15 h-16 ml-2" />
          </button>

          {/* Sidemap-Komponente */}
          <Sidemap icon={node} />

          {/* Spracheinstellungen */}
          <button
            className="toolbar-button"
            onClick={() => console.log("Sprache geändert")}
          >
            Sprache ändern
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar;
