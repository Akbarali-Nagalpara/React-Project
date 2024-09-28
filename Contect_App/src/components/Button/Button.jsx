import React from "react";
import style from './Button.module.css'

const Button = ({text , icon ,issecondary}  ) => {
 

  return (
    <div  >
      <button className={issecondary ?style.secondary_btn : style.primary_btn} >{icon} {text}</button>
    </div>
  );
};

export default Button;
