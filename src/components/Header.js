import React from "react";

const img = "./images/logo-designcode.svg";

function Header() {
  return (
    <div className="Header">
      <div className="HeaderGroup">
        <a href="/">
          <img alt="" src={img} width="30" />{" "}
        </a>
        <a href="/courses">Courses</a>
        <a href="/dowloads">Downloads</a>
        <a href="/workshops">Workshops</a>
        <a href="/buy">
          <button>Buy</button>
        </a>
      </div>
    </div>
  );
}
export default Header;
