import React from "react";
import "./Hero.css";
import { heroImg } from "../../assets";

const Hero = () => {
  const divStyle = {
    backgroundImage: "url(" + heroImg + ")",
  };
  return (
    <div>
      <div style={divStyle}>
        <div className="container hero">
          <div className="hero_left"></div>
          <div className="hero_right">
            <h5 className="title5">New Arrival</h5>
            <h1 className="title"> Discover Our New Collection</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="button">
              {" "}
              <button className=" btn1">BUY Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
