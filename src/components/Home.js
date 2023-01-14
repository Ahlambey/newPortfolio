import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Skills from "./Skills";
import WorkExample from "./WorkExample";
import Hobbies from "./Hobbies";
import Contact from "./Contact";

export default function Home() {
  const home = useRef();
  const experience = useRef();
  const skills = useRef();
  const apps = useRef();
  const hobbies = useRef();
  const contact = useRef();
  const [brPoints, setBrPoints] = useState({});
  const [activeMenuElm, setActiveMenuElm] = useState("home");

  const breakPointsGenerator = () => {
    const refPoints = [
      home.current.offsetTop,
      experience.current.offsetTop,
      skills.current.offsetTop,
      apps.current.offsetTop,
      hobbies.current.offsetTop,
      contact.current.offsetTop,
    ];

    const breakpoints = {};

    //Caluculate the points where a new section starts.
    //the new section starts when only 1/3 of the previous section is visible.
    for (let i = 1; i < refPoints.length; i++) {
      const breakPointNum =
        refPoints[i] - (refPoints[i] - refPoints[i - 1]) / 3;

      //remove decimals
      const breakPoint = Math.round(breakPointNum);
      //create the obj containing all break points
      breakpoints[`${"breakPoint" + i}`] = breakPoint;
    }

    setBrPoints(breakpoints);
  };

  useEffect(() => {
    breakPointsGenerator();
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollPoint = window.scrollY;

      if (
        scrollPoint >= home.current.offsetTop &&
        scrollPoint < brPoints.breakPoint1 - 110
      ) {
        setActiveMenuElm("home");
      }

      if (
        scrollPoint >= brPoints.breakPoint1 - 110 &&
        scrollPoint < brPoints.breakPoint2
      ) {
        setActiveMenuElm("experience");
      }

      if (
        scrollPoint >= brPoints.breakPoint2 &&
        scrollPoint < brPoints.breakPoint3
      ) {
        setActiveMenuElm("skills");
      }

      if (
        scrollPoint >= brPoints.breakPoint3 &&
        scrollPoint < brPoints.breakPoint4
      ) {
        setActiveMenuElm("apps");
      }

      if (
        scrollPoint >= brPoints.breakPoint4 &&
        scrollPoint < brPoints.breakPoint5
      ) {
        setActiveMenuElm("hobbies");
      }

      if (scrollPoint >= brPoints.breakPoint5) {
        setActiveMenuElm("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [brPoints]);

  return (
    <div ref={home} id="home">
      <Navbar currentElm={activeMenuElm} />
      <Hero />
      <div ref={experience} id="experience">
        <Experience isActive={activeMenuElm === "experience" ? true : false} />
      </div>
      <div ref={skills} id="skills">
        <Skills isActive={activeMenuElm === "skills" ? true : false} />
      </div>
      <div ref={apps} id="apps">
        <WorkExample isActive={activeMenuElm === "apps" ? true : false} />
      </div>
      <div ref={hobbies} id="hobbies">
        <Hobbies isActive={activeMenuElm === "hobbies" ? true : false} />
      </div>
      <div ref={contact} id="contact">
        <Contact isActive={activeMenuElm === "contact" ? true : false} />
      </div>
    </div>
  );
}
