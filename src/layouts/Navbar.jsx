import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Active nav link style
  const activeLinkStyle = {
    color: "#00d4ff",
    fontWeight: "600",
    borderBottom: "2px solid #00d4ff",
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Anirban Sen
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="ftco-nav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="ftco-nav"
          >
            <ul className="navbar-nav ml-auto">
              {[
                { to: "home", label: "Home" },
                { to: "about", label: "About" },
                { to: "skills", label: "Skills" },
                { to: "projects", label: "Projects" },
                { to: "contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <ScrollLink
                    activeClass="active"
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="nav-link"
                    onClick={closeNavbar}
                    style={{ cursor: "pointer" }}
                    activeStyle={activeLinkStyle}
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Wrapper to push content down */}
      <div style={{ paddingTop: "70px" }}></div>
    </>
  );
};

export default Navbar;
