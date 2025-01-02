import { useState } from "react";

const HighlightLink2 = () => {
  const [highlightActive, setHighlightActive] = useState(false);

  const toggleHighlight = () => {
    setHighlightActive(!highlightActive);

    // Fügt oder entfernt Tailwind-Klassen für alle Links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
      if (!highlightActive) {
        link.classList.add(
          "border",
          "border-yellow-400",
          "bg-yellow-200",
          "rounded",
          "p-1"
        );
      } else {
        link.classList.remove(
          "border",
          "border-yellow-400",
          "bg-yellow-200",
          "rounded",
          "p-1"
        );
      }
    });
  };

  return (
    <button
      className="toolbar-button p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
      onClick={toggleHighlight}
    >
      {highlightActive ? "Link an" : "Links aus"}
    </button>
  );
};

export default HighlightLink2;
