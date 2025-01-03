import React from "react";
import { resetFontSize } from "./FontSizeControls";

const ResetButton = ({ icon, onClick }) => {
    // Hier kannst du entweder den mitgegebenen onClick PROP ansprechen,
    // ODER direkt deine Reset-Funktionen aufrufen.
    // Die "runde" Variante wäre: wir ignorieren das Prop
    // und bauen eine "eigene" handleClick, die ALLES resettet:
  
    const handleClick = () => {
      // 1) Schriftgröße zurücksetzen
      resetFontSize();
  
      // 2) In einem späteren Schritt fügst du hier
      //    resetHighlight(), resetCursorSize() etc. hinzu
  
      // Optional: Wenn du zusätzlich das "onClick" aus dem Toolbar
      // aufrufen willst (falls da noch was anderes drinsteckt):
      if (onClick) {
        onClick();
      }
    };
  
    return (
      <button
        className="toolbar-button flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        onClick={handleClick}
      >
        Alles zurücksetzen
        {icon && <img src={icon} alt="Reset Icon" className="w-10 h-10 ml-2" />}
      </button>
    );
  };
  
  export default ResetButton;