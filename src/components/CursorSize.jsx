import { useState } from "react";

const CursorSize = () => {
  const [isSpotlightActive, setIsSpotlightActive] = useState(false);

  const toggleSpotlight = () => {
    setIsSpotlightActive(!isSpotlightActive);

    // Overlay einfügen oder entfernen
    if (!isSpotlightActive) {
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.id = "spotlight-overlay";
      document.body.appendChild(overlay);

      // Mausbewegung überwachen
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      const overlay = document.getElementById("spotlight-overlay");
      if (overlay) overlay.remove();

      // Mausbewegung stoppen
      document.removeEventListener("mousemove", handleMouseMove);
    }
  };

  const handleMouseMove = (event) => {
    const overlay = document.getElementById("spotlight-overlay");
    if (overlay) {
      const mouseY = event.clientY;
      overlay.style.setProperty("--spotlight-top", `${mouseY - 50}px`);
    }
  };

  return (
    <button
      className="flex items-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
      onClick={toggleSpotlight}
    >
      {isSpotlightActive ? "Spotlight an" : "Spotlight"}
    </button>
  );
};

export default CursorSize;