import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-hot-toast';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleStartApply = () => {
      return toast.success("Comming soon 👏");
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container py-3">
            <Link to="/" className="navbar-brand dream-nav-logo d-flex">
              Take <span className="active">U</span> forward
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              style={{ zIndex: "10" }}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    title="Home"
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link default"
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/statistics"
                    title="Statistics"
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link default"
                    }
                    aria-current="page"
                  >
                    Statistics
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/applied-jobs"
                    title="Applied Jobs"
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link default"
                    }
                    aria-current="page"
                  >
                    Applied Jobs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    title="Blog"
                    className={({ isActive }) =>
                      isActive ? "active nav-link" : "nav-link default"
                    }
                    aria-current="page"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>

              <button
                onClick={handleStartApply}
                className="dream-btn-primary"
                type="submit"
              >
                Start Applying
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;