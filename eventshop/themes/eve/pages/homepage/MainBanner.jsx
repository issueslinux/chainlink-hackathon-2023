import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="text-center md:text-left px-2" style={{ color: "red" }}>
          <h2 className="h1">Constellation: A Chainlink Hackathon</h2>
          <p>Join us for the biggest Chainlink Hackathon yet.</p>
          <p></p>
          <a className="button button-primary" href="#">
            Get ticket
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};

