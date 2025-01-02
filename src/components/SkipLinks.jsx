
import './SkipLinks.css'; 

const SkipLinks = () => {
  return (
    <div className="skiplinks-container">
      {/* Skiplink zur Navigation */}
      <a href="#navigation" className="skiplink">
        Zur Navigation springen
      </a>
      {/* Skiplink zum Hauptinhalt */}
      <a href="#main-content" className="skiplink">
        Zum Hauptinhalt springen
      </a>
      {/* Skiplink zum Footer */}
      <a href="#footer" className="skiplink">
        Zum Footer springen
      </a>
    </div>
  );
};

export default SkipLinks;
