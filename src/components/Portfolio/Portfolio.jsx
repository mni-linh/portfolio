import React from "react";
import Project from "../Project/Project";
import "./Portfolio.css";
import { projects } from "../../data";

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="section-center">
        <div className="section-title portfolio-title">
          <h2
            className="animate"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            Portfolio
          </h2>
          <div className="underline"></div>
        </div>

        {projects.map((project) => {
          // return <Project project={project} key={project.id} />;
          // E:\Công việc\my-portfolio\public\favicon.ico
        })}
      </div>
      <div className="more-btn">
        <a
          href="https://github.com/mni-linh"
          className="btn project-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          more projects
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
