import React from "react";
import SocialLinks from "../Navbar/SocialLinks/SocialLinks";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-center">
        <SocialLinks />
        <p>
          <span>{new Date().getFullYear()}</span> Tran Thi Tu Linh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
