import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">

        {/* navbar brand */}
        <a className="navbar-brand" href="/">Rony Iraq</a>

        {/* navbar button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                to="/about"
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header;