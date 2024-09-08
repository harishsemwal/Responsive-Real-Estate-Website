import React from "react";
import { list } from "../../data/Data";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const RecentCard = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card shadow-sm border-light">
                <img src={cover} className="card-img-top" alt={name} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span
                      className="badge"
                      style={{
                        backgroundColor:
                          category === "For Sale" ? "#25b5791a" : "#ff98001a",
                        color: category === "For Sale" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {category}
                    </span>
                    <i className="fa fa-heart text-muted"></i>
                  </div>
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    <i className="fa fa-location-dot"></i> {location}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div>
                    <button className="btn btn-primary btn-sm">{price}</button>{" "}
                    <span>/sqft</span>
                  </div>
                  <span className="text-muted">{type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentCard;
