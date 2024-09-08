import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <section className="recent py-5">
      <div className="container">
        <Heading
          title="Recent Property Listed"
          subtitle="Welcome to the realm of exploration and discovery in the world of properties! Embark on an exciting journey with Harish Prasad Semwal, your trusted Property Explorer. Whether you are a seasoned investor, a first-time buyer, or simply curious about the diverse landscape of real estate, join us as we unravel the mysteries and unveil the treasures hidden within properties of all kinds"
        />
        <RecentCard />
      </div>
    </section>
  );
};

export default Recent;
