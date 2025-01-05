import React, { useContext } from "react";
import { AccessibilityContext } from "../AccessibilityContext"; 

const ResetButton = ({ icon, onClick }) => {
    // Kontext importieren
    const { resetFontSize, resetContrastMode, resetSpotlight, resetHighlight } = useContext(AccessibilityContext);

    // HandleClick bleibt schlank und ruft die Funktionen auf
    const handleClick = () => {
        // 1) Schriftgröße zurücksetzen
        resetFontSize();

        // 2) Kontrast zurücksetzen
        resetContrastMode();

        // 3) Spotlight zurücksetzen
        resetSpotlight();

        // 4) Highlight-Links zurücksetzen
        resetHighlight();

        // Optional: Wenn du zusätzlich das "onClick" aus der Toolbar
        // aufrufen willst (falls da noch etwas anderes drinsteckt):
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
