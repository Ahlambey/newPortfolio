import React, { useEffect, useState } from "react";
import { copyToClipboard } from "../utils/utils";
import me from '../images/me.png';
import "./Hero.css";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  //Google analytic screen view
  useEffect(() => {
    if(window.gtag){
      window.gtag('event', 'screen_view', {
        'app_name': 'new-portfolio',
        'screen_name': 'Home'
      });
    }
  }, []);
  
  //Clears the popup after 2s.
  //The popup apprears after user clicks
  //on mail icon to copy email.
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(false);
    }, 2000);

    return () => clearInterval(interval);
  }, [showPopup]);


  //Google analytics that tracks clicks on socials
  const GAsocials = (socialName) => {

    if(window.gtag){
      window.gtag('event', 'socials', {
        'social-elm': socialName
      });
      
    }
  }

  //Google Analytics to track clicks on contact button

  const GAcontactBtn = () =>{
    if(window.gtag){
      window.gtag('event', 'contact-btn-click');
      
    }
  }

  return (
    <section className="hero-container">
      {/* <Navbar /> */}
      <div className="content-container">
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/ahlam-beyoud-bb6a88204"
            target="_blank"
            rel="noopener noreferrer"
            onClick={()=>GAsocials('linkedin')}
          >
            <i className="lni lni-linkedin-original"></i>
          </a>
          <a
            href="https://github.com/Ahlambey"
            target="_blank"
            rel="noopener noreferrer"
            onClick={()=>GAsocials('github')}
          >
            <i className="lni lni-github-original"></i>
          </a>
          <a
            href="https://wa.me/+213657685961"
            target="_blank"
            rel="noopener noreferrer"
            onClick={()=>GAsocials('whatsApp')}
          >
            <i className="lni lni-whatsapp"></i>
          </a>

          <span
            className="popup"
            onClick={() => {
              GAsocials('whatsApp')
              setShowPopup(copyToClipboard())}}
          >
            <span className={`popuptext ${showPopup && "show"}`}>
              Email coppied!
            </span>
            <i className="lni lni-envelope"></i>
          </span>
        </div>
        <div className="text-container">
          <h1 className="title">Front-end Web Developer</h1>
          <p>
            Hello, my name is Ahlam; I am a front-end web developer. What
            motivates me and gives me fire is when my work improves someone
            else's or any living creature's life. It gives me a sense of
            purpose. I see web development as a great skill to impact the lives
            around us; since we can use it to create different means for anyone
            to use and change things around us. As I see the value of this
            skill, I am always motivated to keep learning and improving, so I am
            a lifelong learner.
          </p>
          <a onClick={GAcontactBtn} className="hero-contact-btn-link" href="#contact">
            <button className="call-to-action">Contact Me</button>
          </a>
        </div>
        <div className="img-container">
        <div className="background-circle"></div>
          <img className="ahl-img" src={me} alt='ahl'/>
          
        </div>
      </div>
    </section>
  );
}
