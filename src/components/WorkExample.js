import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./WorkExample.css";

export default function WorkExample({ isActive }) {
  const [animateApps, setAnimateApps] = useState(false);

  useEffect(() => {
    if (isActive) {
      setAnimateApps(true);
    }
  }, [isActive]);

  const cardContent = [
    {
      imgUrl:
        "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
      imgAlt: "inta clone",
      className:"lni lni-instagram-filled",
      cardTitle: "Instaclone",
      cardText:
        "This is a MERN webapp with Redux for state manegment. It is an instagram clone. You can create an account share photos add friends, heart their photos and comment on them.",
      liveDemo: "https://insta-clone-u10z.onrender.com",
      gitHub: "https://github.com/Ahlambey/insta-clone",
    },
    {
      imgUrl: "",
      imgAlt: "E-shop",
      className:"fa-sharp fa-solid fa-store",
   
      cardTitle: "E-shop",
      cardText: "This is a MERN webapp with Redux for state manegment. It is an app where you create an account to shop or/ and sell products online.",
      liveDemo: "https://mern-shop-ieyg.onrender.com/",
      gitHub: "https://github.com/Ahlambey/mern-shop2020",
    },
    {
      imgUrl: "",
      imgAlt: "netflix-clone",
      className:"",
      cardTitle: "netflix-clone",
      cardText: "This is a React.js Netflix clone. You can see the trailer of some shows when you click on their posters.",
      liveDemo: "https://netflix-clone-aa54c.web.app/",
      gitHub: "https://github.com/Ahlambey/netflix-clone",
    },
    {
      imgUrl: "",
      imgAlt: "react e-shop",
      className:"",
      cardTitle: "React e-shop",
      cardText: "This is a React.js e-shop. In this project I have used Redux for state managmenet.",
      liveDemo: "https://hanouti.netlify.app/",
      gitHub: "https://github.com/Ahlambey/E-store-reactjs",
    },
    {
      imgUrl: "",
      imgAlt: "Styled component website",
      className:"",
      cardTitle: "Static website",
      cardText: "This a React static website. I have used styled componenet in this project. ",
      liveDemo: "https://styled-cpt-img-bg.web.app/",
      gitHub: "https://github.com/Ahlambey/styled-component-website",
    },
    {
      imgUrl: "",
      imgAlt: "static website2",
      className:"",
      cardTitle: "Hero section website",
      cardText: "This is a REact.js static website with Hero section with a video.",
      liveDemo: "https://styled-cpt-video-bg.web.app/",
      gitHub: "https://github.com/Ahlambey/styled-component-website",
    },
  ];

  /* add a class active to the first and second row when user 
  gets into this page and add styles to the active only
  */
  return (
    <div className="apps-container">
      <div className={`${animateApps && "animate-apps"} first-row`}>
        <Card cardContent={cardContent[0]} />
        <Card cardContent={cardContent[1]} />
        <Card cardContent={cardContent[2]} />
      </div>
      <div className={`${animateApps && "animate-apps"} second-row`}>
        <Card cardContent={cardContent[3]} />
        <Card cardContent={cardContent[4]} />
        <Card cardContent={cardContent[5]} />
      </div>
    </div>
  );
}
