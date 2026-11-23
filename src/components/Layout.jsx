import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <footer className="footer">
        Agencia de Viajes · Desarrollo Frontend II (PFY2202) · REST + GraphQL
      </footer>
    </div>
  );
}
