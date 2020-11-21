import React from "react";
import "./PropertyResult.css";

function PropertyResult({
  img,
  location,
  city,
  country,
  description,
  developer,
  price,
  investmentStatus,
  investmentProgress,
  returnValue,
  rented,
}) {
  return (
    <div className="propertyResult">
      <img src={img} alt="" />
      <div className="propertyResult__info">
        <div className="propertyResult__infoTop">
          <h3>{location}</h3>
          <span className="propertyResult__country">
            <p>{city}, </p>
            <p>{country}</p>
          </span>
          <p>{developer}</p>
          <p>{description}</p>
        </div>
        <div className="propertyResult__infoBottom">
          {/* add emoji icons for these values */}
          {/* add a progress bar for the progres */}
          <h5>{price}</h5>
          <h5>{investmentStatus}</h5>
          <h5>{investmentProgress}</h5>
          <h5>{returnValue}</h5>
          <p>{rented}</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyResult;
