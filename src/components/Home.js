import React from "react";
import Posts from "./containers/Posts";
import mascot from "../assets/img/mascot.png";

const Home = () => (
  <div>
    <div className="home-component">
      <img src={mascot} alt="mascot" className="mascot-image" />
      <p className="domain">Werick.io</p>
    </div>
    <Posts />
  </div>
);

export default Home;
