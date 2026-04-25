import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#111", color: "white" }}>
      <h2>Rhythm Dance School</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
