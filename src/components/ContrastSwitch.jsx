import { useState } from "react";
import "../assets/contrast.css"; // Import der CSS-Datei

const ContrastSwitch = () => {
  const [isContrastMode, setIsContrastMode] = useState(false);

  const toggleContrastMode = () => {
    setIsContrastMode((prevMode) => !prevMode);
    // Der Zustand ändert sich und steuert die CSS-Klasse im <body>
    if (!isContrastMode) {
      document.body.classList.add("contrast-mode");
    } else {
      document.body.classList.remove("contrast-mode");
    }
  };

  return (
    <button
      className={`toolbar-button ${isContrastMode ? "active" : ""}`}
      onClick={toggleContrastMode}
    >
      {isContrastMode ? "Kontrastmodus deaktivieren" : "Kontrastmodus aktivieren"}
    </button>
  );
};

export default ContrastSwitch;
