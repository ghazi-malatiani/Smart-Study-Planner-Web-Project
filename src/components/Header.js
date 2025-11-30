import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Handle open/close animation
  useEffect(() => {
    if (open) {
      setVisible(true);
      
      const timer = setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 20);

    return () => clearTimeout(timer);


    } else {
      const timeout = setTimeout(() => setVisible(false), 350);
      document.body.style.overflow = "auto";
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Logo + Title */}
          <div className="d-flex align-items-center">
            <BookOpen size={28} className="text-primary me-2" />
            <Link to="/" className="navbar-brand fw-bold text-dark">
              Smart Study Planner
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="d-none d-lg-block">
            <ul className="navbar-nav d-flex flex-row gap-3 align-items-center">
              <li><Link className="nav-link nav-plain" to="/">Home</Link></li>
              <li><Link className="nav-link nav-plain" to="/planner">Planner</Link></li>
              <li><Link className="nav-link nav-plain" to="/about">About</Link></li>
              <li><Link className="nav-link nav-plain" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile 3 lines */}
          <div className="d-lg-none">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setOpen(true)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile overlay */}
      {visible && (
        <div
          className={`mobile-menu-overlay ${open ? "open" : "close"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="container-fluid overlay-inner">

            {/* Close button */}
            <div className="overlay-top">
              <button
                className="overlay-close-btn"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Sign In */}
            <div className="overlay-signin-wrapper">
              <button className="btn btn-primary overlay-signin-btn">
                Sign in
              </button>
            </div>

            {/* Mobile menu links */}
            <div className="overlay-body">
              <h2 className="overlay-menu-title">Menu</h2>

              <ul className="list-unstyled overlay-menu-list">
                <li className="overlay-item">
                  <Link to="/" onClick={() => setOpen(false)} className="mobile-link">
                    Home
                  </Link>
                </li>

                <li className="overlay-item">
                  <Link to="/planner" onClick={() => setOpen(false)} className="mobile-link">
                    Planner
                  </Link>
                </li>

                <li className="overlay-item">
                  <Link to="/about" onClick={() => setOpen(false)} className="mobile-link">
                    About
                  </Link>
                </li>

                <li className="overlay-item">
                  <Link to="/contact" onClick={() => setOpen(false)} className="mobile-link">
                    Contact
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

