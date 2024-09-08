import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "./awards.css";

const Awards = () => {
  return (
    <>
      <section className="awards py-5">
        <div className="container text-center">
          <Heading
            title="Over 1,24,000+ Happy Users Being With Us Still They Love Our Services"
            subtitle="Our Awards"
          />

          <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
            {awards.map((val, index) => (
              <div className="col" key={index}>
                <div className="award-box d-flex flex-column align-items-center justify-content-center text-center p-4 rounded shadow-lg bg-white">
                  <div className="award-icon mb-3 d-flex align-items-center justify-content-center bg-primary text-white rounded-circle">
                    <span className="icon fs-3">{val.icon}</span>
                  </div>
                  <h2 className="award-number mb-2 fs-4">{val.num}</h2>
                  <p className="award-description mb-0 text-muted">
                    {val.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
