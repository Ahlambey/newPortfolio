import React from "react";
import "./Card.css";

export default function Card({ cardContent }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            {/* <img alt={cardContent.imgAlt} src={cardContent.imgUrl} /> */}
            {/*  <i className={cardContent.className}></i> */}

            <h3>{cardContent.cardTitle}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{cardContent.cardText}</p>
            <div className="card-btns">
              <a href={cardContent.liveDemo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={cardContent.gitHub} target="_blank" rel="noreferrer">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
