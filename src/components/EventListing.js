import React from "react";

export default props => (
  <div class="home-event">
    <h2>{props.title}</h2>
    <span>{props.date}</span>
    <p>{props.description}</p>
    <a href={props.link}>Kayıt</a>
  </div>
);
