import React, { useState } from "react";
import "./Slider.css";
import img2 from "../images/img1.jpg";
import img4 from "../images/img2.jpg";
import img1 from "../images/img3.jpg";
import img3 from "../images/img4.jpg";

export default function Slider() {
  const [checked, setChecked] = useState("slide1");

  const checkRadioBtn = (value) => {
    setChecked(value);
  };

  return (
    <div>
      <ul className="slider">
        <li>
          <input
            type="radio"
            id="slide1"
            name="slide"
            checked={checked === "slide1" ? true : false}
            onClick={() => checkRadioBtn("slide1")}
            readOnly={true}
          />
          <label htmlFor="slide1"></label>
          <img src={img1} alt="Panel 1" />
        </li>
        <li>
          <input
            type="radio"
            id="slide2"
            name="slide"
            checked={checked === "slide2" ? true : false}
            onClick={() => checkRadioBtn("slide2")}
            readOnly={true}

          />
          <label htmlFor="slide2"></label>
          <img src={img2} alt="Panel 2" />
        </li>
        <li>
          <input
            type="radio"
            id="slide3"
            name="slide"
            checked={checked === "slide3" ? true : false}
            onClick={() => checkRadioBtn("slide3")}
            readOnly={true}

          />
          <label htmlFor="slide3"></label>
          <img src={img3} alt="Panel 3" />
        </li>
        <li>
          <input
            type="radio"
            id="slide4"
            name="slide"
            checked={checked === "slide4" ? true : false}
            onClick={() => checkRadioBtn("slide4")}
            readOnly={true}

          />
          <label style={{ bottom: "-5.6em" }} htmlFor="slide4"></label>
          <img
            style={{ height: "28.75rem", marginTop: "8rem" }}
            src={img4}
            alt="Panel 4"
          />
        </li>
      </ul>
    </div>
  );
}
