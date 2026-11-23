import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        <span className="navbar__logo">✈️</span>
        <span>Agencia de Viajes</span>
      </Link>
      <span className="navbar__subtitle">Destinos, vuelos y hoteles</span>
    </nav>
  );
}
