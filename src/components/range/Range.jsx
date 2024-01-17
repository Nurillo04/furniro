import React from "react";
import "./Range.css";
import { living } from "../../assets";
import { bedrom } from "../../assets";
import { dining } from "../../assets";

const Range = () => {
  return (
    <div className="range container">
      <div>
        <h1 className="title">Browse The Range</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <ul className="list">
              <li className="item">
                {" "}
                <img src={dining} alt="dining" />
                <p className="text">Dining</p>
              </li>
              <li className="item">
                {" "}
                <img src={living} alt="living" />
                <p className="text">Living</p>
              </li>
              <li className="item">
                {" "}
                <img src={bedrom} alt="bedrom" />
                <p className="text">Bedroom</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Range;
