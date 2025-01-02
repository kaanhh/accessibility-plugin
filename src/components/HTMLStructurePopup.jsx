import { useEffect, useState } from "react";
import "../assets/HTMLStructurePopup.css";

const HTMLStructurePopup = ({ onClose }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    console.log("useEffect läuft..."); // Prüfen, ob der useEffect aufgerufen wird

    // HTML-Tags sammeln: main, section, header, footer, nav
    const tags = ["main", "section", "header", "footer", "nav"];
    const foundElements = [];

    tags.forEach((tag) => {
      const elements = document.querySelectorAll(tag); // Alle Elemente des Tags finden
      console.log(`Gefundene Elemente für ${tag}:`, elements); // Log aller gefundenen Elemente

      elements.forEach((element, index) => {
        console.log(`Tag: ${tag.toUpperCase()}, ID: ${element.id || "Keine ID"}`);
        foundElements.push({
          tag,
          id: element.id || `Keine ID (${index + 1})`, // ID oder eindeutiger Hinweis, falls keine ID vorhanden
          element,
        });
      });
    });

    console.log("Alle gesammelten Elemente:", foundElements); // Log aller Elemente nach Verarbeitung
    setElements(foundElements); // Gefundene Elemente speichern
  }, []);

  const scrollToElement = (element) => {
    console.log("Navigieren zu:", element);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    onClose(); // Popup schließen
  };

  return (
    <div className="html-structure-popup">
      <div className="popup-header">
        <h2>Seitenstruktur</h2>
        <button onClick={onClose}>X</button>
      </div>

      {/* Prüfen, ob Elemente vorhanden sind */}
      {elements.length > 0 ? (
        <ul>
          {elements.map((el, index) => (
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
      ) : (
        <p>Keine relevanten HTML-Elemente gefunden.</p>
      )}
    </div>
  );
};

export default HTMLStructurePopup;
