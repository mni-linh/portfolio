import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero-img.jpg";
import SocialLinks from "../Navbar/SocialLinks/SocialLinks";
import Btn from "../Btn/Btn";
import cv from "../../assets/cvtranthitulinh.pdf";
const Hero = () => {
  return (
    <header className="section hero">
      <div className="section-center hero-center">
        <article className="hero-info animate" data-animate="slideInLeft 2s">
          <div className="underline"></div>

          <h1>i'm a front-end developer</h1>
          <p>My slogan hasn't yet thinkkkk 😅</p>

          <div className="hero-btn-wrapper">
            <Btn
              href={cv}
              download="[CV]-TranThiTuLinh"
              name="my cv"
              type="hero-btn"
            />
            <Btn href="#contact" name="contact" type="hero-btn" />
          </div>
          <SocialLinks />
        </article>

        <article className="hero-img animate" data-animate="slideInRight 2s">
          <img src={heroImg} className="hero-photo" alt="linhtran" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
