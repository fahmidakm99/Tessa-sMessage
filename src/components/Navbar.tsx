import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/story">Our Story</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/notes">Love Notes</Link>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "20px",
    backgroundColor: "#ffe6f0",
    fontWeight: "bold",
    fontSize: "18px"
  }
};

export default Navbar;
