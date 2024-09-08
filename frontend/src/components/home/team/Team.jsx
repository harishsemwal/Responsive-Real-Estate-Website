import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "./team.css";

const Team = () => {
  return (
    <>
      <section className="team py-5 bg-light">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="A buyers agent is a licensed real estate professional who works exclusively on behalf of property buyers. Their primary responsibility is to represent and advocate for the best interests of their clients throughout the property purchasing process."
          />

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {team.map((val, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm border-light rounded">
                  <div className="card-body text-center">
                    <div className="img-container mb-3">
                      <img
                        src={val.cover}
                        alt={val.name}
                        className="img-fluid rounded-circle"
                      />
                      <i className="fa-solid fa-circle-check position-absolute verified-icon"></i>
                    </div>
                    <h4 className="card-title mb-2">{val.name}</h4>
                    <p className="card-text text-muted mb-2">
                      <i className="fa fa-location-dot"></i> {val.address}
                    </p>
                    <div className="d-flex justify-content-center mb-3">
                      {val.icon.map((icon, idx) => (
                        <div className="icon-container mx-2" key={idx}>
                          {icon}
                        </div>
                      ))}
                    </div>
                    <button className="btn btn-primary me-2">
                      <i className="fa fa-envelope"></i> Message
                    </button>
                    <button className="btn btn-outline-primary">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                  <div className="card-footer text-center">
                    <button className="btn btn-secondary">
                      {val.list} Listings
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
