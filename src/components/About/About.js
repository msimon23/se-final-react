import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img
        className="about__image"
        src="../../../images/author-image.jpg"
        alt="Author"
      />
      <div className="about__text">
        <h3 className="about__title">About the Author</h3>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__paragraph">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}
