import { useState } from "react";

const Sidemap = ({ icon }) => {
  const [isShortcutPopupOpen, setIsShortcutPopupOpen] = useState(false);
  const [htmlStructure, setHtmlStructure] = useState([]);

  const toggleShortcutPopup = () => {
    setIsShortcutPopupOpen(!isShortcutPopupOpen);

    if (!isShortcutPopupOpen) {
      const tags = ["main", "header", "section", "footer", "nav"];
      const foundElements = [];

      tags.forEach((tag) => {
        const elements = document.querySelectorAll(tag);
        elements.forEach((element, index) => {
          foundElements.push({
            tag,
            id: element.id || `Keine ID (${index + 1})`,
            element,
          });
        });
      });

      console.log("Alle gesammelten Elemente:", foundElements);
      setHtmlStructure(foundElements);
    }
  };

  const scrollToElement = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsShortcutPopupOpen(false);
  };

  return (
    <>
      {/* Sidemap-Button */}
      <button
        className="toolbar-button flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        onClick={toggleShortcutPopup}
      >
        Sidemap
        {icon && <img src={icon} alt="Sidemap Icon" className="w-15 h-11 ml-2" />}
      </button>

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
    </>
  );
};

export default Sidemap;
