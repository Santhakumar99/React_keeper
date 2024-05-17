import React from "react";

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <div>
      <div className="footercontent">
        <p className="footer_text">Copyright © {year}</p>
      </div>
    </div>
  );
};

export default Footer;
