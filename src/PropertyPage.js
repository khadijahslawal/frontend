import React from "react";
import "./Propertypage.css";
import { Button } from "@material-ui/core";
import PropertyResult from "./PropertyResult";

function PropertyPage() {
  return (
    <div className="propertyPage">
      <div className="propertyPage__info">
        <h1>List of Properties</h1>
        <Button variant="outlined"> For Rent </Button>
        <Button variant="outlined"> For Investment </Button>
        <Button variant="outlined"> High demand </Button>
        <Button variant="outlined"> Low Price </Button>
      </div>

      <PropertyResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of Downtown Dubai"
        city="Dubai"
        country="United Arab Emirates"
        developer="Dubai Holdings"
        /*description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"*/ s
        price="$850,000"
        /*investmentStatus=""*/
        investmentProgress="75%"
        returnValue="3% yield"
        rented="Available for Rent"
      />
    </div>
  );
}

export default PropertyPage;
