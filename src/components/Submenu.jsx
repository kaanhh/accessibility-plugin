import { useState } from "react";

const Submenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="submenu-container">
      {/* Pfeil-Button */}
      <button
        className="submenu-toggle flex items-center justify-center p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
        onClick={toggleSubmenu}
        aria-label="Submenü umschalten"
      >
        ▼
      </button>

      {/* Submenü */}
      {isOpen && (
        <div className="submenu bg-gray-100 border border-gray-300 rounded mt-2 p-2transition-all duration-300 transform">
          {options.map((option, index) => (
            <button
              key={index}
              className="submenu-item p-2 rounded hover:bg-gray-200"
              onClick={option.action}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Submenu;
