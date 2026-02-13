import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>💖 Love</div>

      {/* Hamburger Button */}
      <div
        style={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Links */}
      <div
        style={{
          ...styles.links,
          ...(isOpen ? styles.linksOpen : {})
        }}
      >
        <Link style={styles.link} to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link style={styles.link} to="/story" onClick={() => setIsOpen(false)}>Our Story</Link>
        <Link style={styles.link} to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link style={styles.link} to="/notes" onClick={() => setIsOpen(false)}>Love Notes</Link>
      </div>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#ffe6f0",
    position: "relative",
    flexWrap: "wrap"
  },

  logo: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#ff4d94"
  },

  hamburger: {
    fontSize: "24px",
    cursor: "pointer",
    display: "none"
  },

  links: {
    display: "flex",
    gap: "30px"
  },

  link: {
    textDecoration: "none",
    color: "#ff4d94",
    fontWeight: "bold"
  },

  /* Mobile styles */
  linksOpen: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "15px",
    gap: "15px"
  }
};

export default Navbar;
