import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section-center">
        <div className="section-title about-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            About me
          </h2>
          <div className="underline"></div>
        </div>

        <div className="about-center animate" data-animate="slideInLeft 2s">
          <div className="about-center-info">
            <h3>welcome my blog!</h3>
            <p>
              Hello, I'm Tu Linh and also a frontend developer in Ho Chi Minh
              City. I'm passionate about music, technology and coding.
              <br />
              Therefore, I'm trying to learn something every day to pursue my
              passion as a front-end developer.
            </p>
          </div>

          <div className="animate" data-animate="slideInRight 2s">
            <h3>Education</h3>
            <div>
              <p>2019-2023</p>
              <p>
                <strong>
                  Bachelor of Software Engineering | Ho Chi Minh City University
                  of Education
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
