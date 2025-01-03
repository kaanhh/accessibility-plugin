import { useState } from "react";

const HighlightLink2 = ({ icon }) => {
  const [highlightActive, setHighlightActive] = useState(false);

  const toggleHighlight = () => {
    setHighlightActive(!highlightActive);

    // Fügt oder entfernt Tailwind-Klassen für alle Links
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
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
      className="toolbar-button flex justify-between text-lg items-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
      onClick={toggleHighlight}
    >
      {/* Text */}
      <span>{highlightActive ? "Link an" : "Links aus"}</span>

      {/* Icon */}
      {icon && <img src={icon} alt="Highlight Icon" className="w-10 h-10" />}
    </button>
  );
};

export default HighlightLink2;
