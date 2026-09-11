import { Plane, UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button
          className="logo"
          onClick={() => navigate("home")}
        >
          <span className="logo-icon">
            <Plane size={22} />
          </span>
          <span>TripMate AI</span>
        </button>

        <div className="nav-links">
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => navigate("home")}
          >
            Home
          </button>

          <button
            className={page === "explore" ? "active" : ""}
            onClick={() => navigate("explore")}
          >
            Explore
          </button>

          <button
            className={page === "saved" ? "active" : ""}
            onClick={() => navigate("saved")}
          >
            My Trips
          </button>
        </div>

        <div className="nav-user">
          <UserCircle size={30} />
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => navigate("home")}>
            Home
          </button>

          <button onClick={() => navigate("explore")}>
            Explore
          </button>

          <button onClick={() => navigate("saved")}>
            My Trips
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;