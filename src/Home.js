import React, { useState } from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="home">
      <Banner />
      <div className="action__buttons">
        <Button variant="outlined"> Add Property </Button>
        <Button variant="outlined"> Invest </Button>
        <Button variant="outlined"> Rent </Button>
      </div>

      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          price="$120,000"
          percentsold="80% sold"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          price="$120,000"
          percentsold="80% sold"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          price="$120,000"
          percentsold="80% sold"
        />
      </div>

      <div className="view_more">
        <Button
          onClick={() => history.push("/properties")}
          variant="outlined"
          className="view_more_btn"
        >
          View All Properties
        </Button>
      </div>
    </div>
  );
}

export default Home;
