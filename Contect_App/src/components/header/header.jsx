import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <>
      <nav className={style.header}>
        <div className={style.container}>
          <div className="logo">
            <img src="Frame 2 1.png" alt="" />
          </div>
          <ul className={style.ullist}>
            <li>Home</li>
            <li>About</li>
            <li>Contect</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
