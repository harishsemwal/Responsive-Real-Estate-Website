import React from "react";
import Back from "../common/Back";
import PriceCard from "../home/price/PriceCard";
import img from "../images/pricing.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "../home/price/price.css";

const Pricing = () => {
  return (
    <>
      <section className="pricing mb-5">
        <Back
          name="30 Days Money Back Guarantee"
          title="No Extra Fees. Friendly Support"
          cover={img}
        />
        <div className="price container py-5">
          <h2 className="section-title mb-4">Flexible Pricing Plans</h2>
          <p className="section-subtitle mb-5">
            Choose the plan that suits your needs best.
          </p>
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;
