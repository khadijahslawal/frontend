import React from "react";
import "./Card.css";

//our card will take props; title, price, percentage sold,location, image source
function Card({ src, title, description, price, percentsold }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
        <h3>{percentsold}</h3>
      </div>
    </div>
  );
}

export default Card;
