import { useState, useEffect } from "react";

const FontSizeControls = () => {
  const [fontSize, setFontSize] = useState(16); // Standard-Schriftgröße

  useEffect(() => {
    // Aktualisiere die Schriftgröße nur für den Hauptinhalt
    const content = document.querySelector(".main-content");
    if (content) {
      content.style.fontSize = `${fontSize}px`;
      content.style.transition = "font-size 0.3s ease"; // Sanfter Übergang
    }
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 32)); // Maximal 32px
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12)); // Minimal 12px
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm font-bold mr-4">Schriftgröße:</span>
      <div className="flex">
        <button
          className="bg-gray-100 text-gray-800 py-2 px-4 rounded-l hover:bg-gray-200 border-r"
          onClick={decreaseFontSize}
        >
          -
        </button>
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

export default FontSizeControls;
