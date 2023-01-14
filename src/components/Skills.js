import React from "react";
import SkillBar from "./SkillBar";
import "./Skills.css";

export default function Skills({ isActive }) {
  return (
    <div className="skills-container">
      <div className="progress-bars">
        <SkillBar
          animate={isActive ? true : false}
          skillNum={60}
          animName="progress2"
          skillName="css"
        />
        <SkillBar
          animate={isActive ? true : false}
          skillNum={80}
          animName="progress1"
          skillName="html"
        />
        <SkillBar
          animate={isActive ? true : false}
          skillNum={80}
          animName="progress3"
          skillName="React"
        />
        <SkillBar
          animate={isActive ? true : false}
          skillNum={70}
          animName="progress4"
          skillName="React Native"
        />
        <SkillBar
          animate={isActive ? true : false}
          skillNum={70}
          animName="progress5"
          skillName="Vue"
        />
        <SkillBar
          animate={isActive ? true : false}
          skillNum={65}
          animName="progress6"
          skillName="Node"
        />
        <SkillBar
          animate={isActive ? true : false}
          skillNum={70}
          animName="progress7"
          skillName="MongoDB"
        />
      </div>
      <div className="skills-illustration"></div>
    </div>
  );
}
