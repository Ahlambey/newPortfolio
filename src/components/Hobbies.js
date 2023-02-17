import React, { useState } from "react";
import "./Hobbies.css";
import Lottie from "lottie-react";
import art from "./lottie/44311-arte.json";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import { isMobile, isSmallPc } from "../utils/utils";

export default function Hobbies() {
  const [showArt, setShowArt] = useState(false);
  const lottieStyle = {
    width: "600px",
  };

  const checkArt = () => {
    setShowArt(!showArt);

    //GA track if visitors check the artwork
    if(window.gtag){
      window.gtag('event', 'check-art');
    }  
  };

  return (
    <div className="hobbies-container">
      {/* Illustration section */}
      <div className="about-me-art-container">
        <div className="about-me-illustration">
          <Lottie animationData={art} loop={true} style={lottieStyle}></Lottie>
        </div>
        {/*         <div className={`${showArt && "show-artwork-slider"} artwork-slider`}>
          <Slider2 />
        </div> */}
      </div>
      {/* Content section */}
      <section className="about-me-container">
        <div className="about-me-content">
          I will tell you a little story about how I got into web development. I
          graduated as an agronomy engineer. But I couldn't work in that field.
          As you might know, agriculture contributes to global gas emissions.
          And it causes soil degradation because we tend to kill so many
          organisms using chemicals, thus reducing the soil biodiversity and
          making it infertile eventually. I decided to choose another path
          because I believe that if you can not be part of the solution, at
          least don't be part of the problem. Apart from work, I do like to
          learn different skills that have an artistic sense. I make some of my
          clothes occasionally and practice new designs. I make simple
          embroideries from time to time. And I paint aquarelle paintings; you
          can &nbsp;
          <span className="clickable-text" onClick={checkArt}>
            check some of them here.
          </span>
          &nbsp;
          Besides that, I meditate, practice yoga, and work out to reenergize my
          body and refresh my mind. I also enjoy spending time with my family
          and my adorable cat Minou. I appreciate the time I spend taking care
          of my little garden. And the time I spend in nature because it fills
          me with tranquility and peace.
          <div
            onClick={checkArt}
            className={`${showArt && "showArt"} art-container`}
          >
            <div
              className={`${showArt && "show-artwork-slider"} artwork-slider`}
            >
              {isMobile() || isSmallPc() ? <Slider2 /> : <Slider />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
