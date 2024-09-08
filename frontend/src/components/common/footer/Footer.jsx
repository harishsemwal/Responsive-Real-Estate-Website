import React from "react";
import { footer } from "../../data/Data";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="bg-light py-5 footerContact">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-8 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold text-dark">
                Do You Have Questions?
              </h1>
              <p className="lead text-muted">
                We'll help you to grow your career and growth.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <button className="btn btn-primary btn-lg">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <img
                src="../images/logo-light.png"
                alt="Logo"
                className="img-fluid mb-3"
                style={{ maxWidth: "180px" }}
              />
              <h2 className="h4">Do You Need Help With Anything?</h2>
              <p className="text-muted">
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month.
              </p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>

            {footer.map((val, index) => (
              <div className="col-md-2 mb-4 mb-md-0" key={index}>
                <h5 className="text-uppercase">{val.title}</h5>
                <ul className="list-unstyled">
                  {val.text.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.link}
                        className="text-white text-decoration-none"
                      >
                        {item.list}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className="bg-blue color-white py-3 text-center">
        <span>© 2024 Uphelder Properties. Designed by Harish Prasad Semwal</span>
      </div>
    </>
  );
};

export default Footer;
