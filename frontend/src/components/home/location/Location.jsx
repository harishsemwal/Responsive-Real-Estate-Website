import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="location py-5 bg-light">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="Embarking on a property exploration journey often begins with selecting the right location. Join Uphelder as company navigates the intricate landscape of properties based on their geographical settings."
          />

          <div className="row g-4">
            {location.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="position-relative overflow-hidden rounded shadow-lg">
                  <img src={item.cover} alt={item.name} className="img-fluid" />
                  <div className="overlay position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100 text-white bg-dark bg-opacity-50 rounded">
                    <h5 className="fs-4 mb-3">{item.name}</h5>
                    <p className="d-flex flex-wrap justify-content-center mb-0">
                      <span className="badge bg-primary me-2">{item.Villas}</span>
                      <span className="badge bg-secondary me-2">{item.Offices}</span>
                      <span className="badge bg-success">{item.Apartments}</span>
                    </p>
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

export default Location;
