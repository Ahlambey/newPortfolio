import React, { useEffect, useState } from "react";
import Keyframes from "../utils/Keyframes";
import "./SkillBar.css";

export default function SkillBar({ skillNum, animName, skillName, animate }) {
  var [skill, setSkill] = useState(0);
  const [strokeDashoff, setStrokeDashoff] = useState(0);
  const [animateStroke, setAnimateStroke] = useState(false);

  //calculate strokeDashoffset based on the pourcentage
  useEffect(() => {
    const calculStrokeDashoffset = 472 - (472 * skillNum) / 100;
    setStrokeDashoff(Math.ceil(calculStrokeDashoffset));
  }, [skillNum, strokeDashoff]);

  //Animate the pourtentage
  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        if (skill < skillNum) {
          setSkill(skill + 1);
        }
      }, 20);
      //animate the stroke only when user gets into the skills section
      setAnimateStroke(true);

      return () => clearInterval(interval);
    }
  }, [skill, skillNum, animate]);

  //SVG Styles
  const circleStyle = {
    fill: "none",
    stroke: "url(#GradientColor)",
    strokeWidth: "20px",
    strokeDasharray: 472,
    strokeDashoffset: 472,
    animation: `${animName} 2s linear forwards`,
  };

  const svgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div className="skill-container">
      <div className="outer-circle">
        <div className="inner-circle">
          <div id="number">{skill}%</div>
        </div>
      </div>

      <svg
        style={svgStyle}
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          style={circleStyle}
          cx="80"
          cy="80"
          r="70"
          strokeLinecap="round"
        />
      </svg>
      <style>
        <Keyframes
          name={animateStroke && `${animName}`}
          _100={{ strokeDashoffset: strokeDashoff }}
        />
      </style>

      <div className="skill-name">{skillName}</div>
    </div>
  );
}
