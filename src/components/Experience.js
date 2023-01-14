import React from "react";
import "./Experience.css";
import Lottie from "lottie-react";
import programmarAnim from "./lottie/94528-programmer.json";

export default function Experience() {
  return (
    <div className="experience-container">
      <div className="exp-illustration">
        <Lottie
          animationData={programmarAnim}
          loop={true}
          style={{ width: "600px" }}
        />
      </div>

      <div className="exp-content">
        <p>
          I have been in the game since 2019, drawn to it by love and
          fascination; I could not help but learn more at each step of the road.
          I have worked on many personal projects using Reactjs in the front
          end, Redux for state management, Node in the backend, and MongoDB as a
          database. In 2021 I joined Smeetz, an international company based in
          Switzerland. The company offers ticketing solutions to leisure and
          entertainment companies. I was exclusively responsible for the
          maintenance and improvement of the widget; the latter is what
          companies embed in their websites to manage their bookings. We used
          pure javascript in this part of the web application. I have also
          worked with my colleagues on the booking flow, where all the booking
          management magic happens. On the booking flow part, we have used the
          following technologies: <br/> &#x2022;Vuejs with typescript. <br />
          &#x2022;Vuex for state management. <br />
          &#x2022;Quasar as a UI library.
          <br />I have also worked on SEO and Google Analytics. We have worked
          to give our clients the ability to have google analytics in the
          widgets. Lastly, I would say the best experience was working with
          people from different cultures and countries. Some spoke up to six
          languages fluently, and some did not speak any language but their
          mother tongue. To me, this was like enjoying a beautiful colorful
          painting. I was lucky to have worked with a diverse and culturally
          rich community.
        </p>
      </div>
    </div>
  );
}
