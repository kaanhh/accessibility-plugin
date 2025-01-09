import { useState } from "react";

const Settings = ({ icon }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Settings-Button */}
      <div className="w-full flex justify-end">
        <button
          className="p-2 rounded-full !bg-white hover:bg-gray-200 border border-gray-300"
          onClick={toggleSettings}
          aria-label="Einstellungen öffnen"
          style={{ width: "30%" }}
        >
          <img
            src={icon}
            alt="Settings Icon"
            className="w-6 h-6 mx-auto"
          />
        </button>
      </div>

      {/* Einstellungen-Popup */}
      {isSettingsOpen && (
        <div className="shortcut-popup">
          <div className="popup-header">
            <h2>Einstellungen</h2>
            <button
              onClick={toggleSettings}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              X
            </button>
          </div>
          <p>Hier können weitere Einstellungen hinzugefügt werden.</p>
        </div>
      )}
    </>
  );
};

export default Settings;
