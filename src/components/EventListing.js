import React from "react";

export default props => (
  <div class="home-event">
    <div class="home-event-date">
      <span>YAKINDA</span>
    </div>
    <div class="home-event-info">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </div>
);
