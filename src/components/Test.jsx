import React, { useState, useEffect, useCallback } from "react";
import { playIcon, stopIcon, skipIcon } from "../assets";

const Test = () => {
  const [isReadingMode, setIsReadingMode] = useState(false); // Zustand für den Vorlese-Modus
  const [utterance, setUtterance] = useState(null); // Speichert die aktuelle SpeechSynthesisUtterance

  // Funktion, die ausgeführt wird, wenn auf einen Text geklickt wird
  const handleTextClick = useCallback(
    (event) => {
      if (!isReadingMode) {
        console.log("Vorlese-Modus ist nicht aktiv.");
        return;
      }

      const clickedElement = event.target;

      // Prüfen, ob das Ziel ein Textelement ist
      if (clickedElement && clickedElement.innerText) {
        const textToSpeak = clickedElement.innerText; // Der Text des angeklickten Elements
        const newUtterance = new SpeechSynthesisUtterance(textToSpeak);

        newUtterance.lang = "de-DE"; // Sprache einstellen
        newUtterance.rate = 0.8; // Lesegeschwindigkeit
        newUtterance.pitch = 1; // Tonhöhe

        setUtterance(newUtterance);

        speechSynthesis.cancel(); // Stoppe vorherige Ausgabe
        speechSynthesis.speak(newUtterance);

        console.log(`Vorlese gestartet: "${textToSpeak}"`);

        newUtterance.onend = () => {
          console.log("Vorlesen beendet.");
        };
      } else {
        console.log("Kein gültiges Textelement angeklickt.");
      }
    },
    [isReadingMode]
  );

  // Funktion zum Starten des Vorlese-Modus
  const handlePlay = () => {
    if (!isReadingMode) {
      setIsReadingMode(true); // Aktiviert den Vorlese-Modus
      console.log("Vorlese-Modus aktiviert.");
    }
  };

  // Funktion zum Beenden des Vorlese-Modus und der Sprachausgabe
  const handleStop = () => {
    if (isReadingMode) {
      setIsReadingMode(false); // Deaktiviert den Vorlese-Modus
      speechSynthesis.cancel(); // Beendet laufende Sprachausgabe
      console.log("Vorlese-Modus deaktiviert und Sprachausgabe gestoppt.");
    }
  };

  // Globaler Event-Listener für Klicks auf das gesamte Dokument
  useEffect(() => {
    if (isReadingMode) {
      document.addEventListener("click", handleTextClick);
    } else {
      document.removeEventListener("click", handleTextClick);
    }

    // Cleanup beim Unmounten oder Zustandwechsel
    return () => {
      document.removeEventListener("click", handleTextClick);
    };
  }, [isReadingMode, handleTextClick]);

  return (
    <button className="flex justify-between items-center w-full bg-blue-500 py-2 px-4 rounded hover:bg-blue-600">
      {/* Linker Bereich: Text */}
      <span>Vorlesen</span>

      {/* Rechter Bereich: Container für die Icons */}
      <div className="flex items-center gap-2">
        {/* Skip-Icon */}
        <img
          id="skip-button"
          src={skipIcon}
          alt="Skip Icon"
          className="w-8 h-8 cursor-pointer"
          onClick={() => {
            console.log("Skip gedrückt");
            handleStop(); // Skip beendet auch den Vorlese-Modus
          }}
        />

        {/* Play-Icon */}
        <img
          id="play-button"
          src={playIcon}
          alt="Play Icon"
          className="w-8 h-8 cursor-pointer"
          onClick={handlePlay}
        />

        {/* Stop-Icon */}
        <img
          id="stop-button"
          src={stopIcon}
          alt="Stop Icon"
          className="w-8 h-8 cursor-pointer"
          onClick={handleStop}
        />
      </div>
    </button>
  );
};

export default Test;
