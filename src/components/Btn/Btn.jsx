import React from "react";

const Btn = ({ href, name, type, download }) => {
  return (
    <a href={href} className={`btn ${type}`} download={download}>
      {name}
    </a>
  );
};

export default Btn;
