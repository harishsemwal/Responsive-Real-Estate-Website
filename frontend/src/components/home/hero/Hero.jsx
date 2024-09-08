import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <Heading
              title="Find Your Perfect Home"
              subtitle="Explore a variety of properties in your local area with ease."
            />

            <form className="search-form">
              <div className="form-group">
                <label>City/Street</label>
                <input type="text" placeholder="Enter location" />
              </div>
              <div className="form-group">
                <label>Property Type</label>
                <input type="text" placeholder="e.g. Apartment, House" />
              </div>
              <div className="form-group">
                <label>Price Range</label>
                <input type="text" placeholder="e.g. $1000 - $3000" />
              </div>
              <div className="form-group advanced-filter">
                <button className="btn-filter">
                  <i className="fa fa-filter"></i> Advanced Filter
                </button>
              </div>
              <button className="btn-search">
                <i className="fa fa-search"></i> Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
