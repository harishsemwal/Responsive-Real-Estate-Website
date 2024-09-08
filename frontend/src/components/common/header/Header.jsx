import React, { useState, useEffect } from "react";
import { nav } from "../../data/Data";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Header.css'; // Import additional custom CSS if needed

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Check if the user is authenticated by looking for a token or some flag
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthButtonClick = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      localStorage.removeItem("authToken");
      alert("You have been logged out.");
    } else {
      history.push("/login");
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link to="/" className="logo">
          <img src="./images/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </Link>

        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setNavList(!navList)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navList ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {nav.map((list, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={list.path}>
                    {list.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="d-flex align-items-center">
          <button
            className="btn btn-primary d-flex align-items-center"
            onClick={handleAuthButtonClick}
          >
            <i className={`fa ${isAuthenticated ? "fa-sign-out-alt" : "fa-sign-in-alt"} me-2`}></i>
            {isAuthenticated ? "Logout" : "Log-In"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
