import React from "react";
import "./Slider2.css";
import img2 from "../images/img1.jpg";
import img4 from "../images/img2.jpg";
import img1 from "../images/img3.jpg";
import img3 from "../images/img4.jpg";

export default function Slider2() {
  return (
    <div className="slider2">
      <div className="slide" id="slide-1">
        <img src={img1} alt="Panel 1" />
      </div>
      <div className="slide" id="slide-3">
        <img src={img2} alt="Panel 2" />
      </div>
      <div className="slide" id="slide-4">
        <img src={img3} alt="Panel 2" />
      </div>
      <div className="slide" id="slide-2">
        <img
          style={{ height: "300px", marginTop: "100px" }}
          src={img4}
          alt="Panel 2"
        />
      </div>
    </div>
  );
}
