import React, { useState } from "react";
import Button from "../Button/Button";
import style from './contect.module.css'
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";

const Contect = () => {


  const [name ,setname]= useState('')
  const [email , setemail]= useState('')
  const [text , settext]= useState('')





  onsubmit = (event) => {
    event.preventDefault();
    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);       
  }




  return (
    <>
      <main>
        <div className={style.container}>
          <div className={style.contectpart}>
            <div className={style.contect}>
              <div className={style.btns}>
                <Button
                  text="VIA SUPPORT CHAT"
                  icon={<BsChatLeftTextFill fontSize={"20px"} />}
                />
                <Button
                  text="VIA CALL"
                  icon={<IoIosCall fontSize={"20px"} />}
                />
              </div>
              <Button
                issecondary={true}
                text="VIA EMAIL FORM"
                icon={<BsChatLeftTextFill fontSize={"20px"} />}
              />
              <form onSubmit={onsubmit}>
                <div className={style.input_control}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="Enter name" />
                </div>
                <div className={style.input_control}>
                  <label htmlFor="email">E-Mail</label>
                  <input type="email" name="email" placeholder="Enter Email" />
                </div>
                <div className={style.input_control}>
                  <label htmlFor="name">Text</label>
                  <textarea name="name" rows={6} placeholder="Enter Text" />
                </div>

                <div className={style.submit}>
                  <Button text="SUBMIT BUTTON" />
                </div>
              </form>
            </div>
            <div className={style.contect_img}>
              <img src="Service 24_7-pana 1.svg" alt="" />
            </div>
          </div>

          <main>
            <div className={style.display}>
              <div className={style.display_div}>
                <h4>Name :</h4>
                <span>{name}</span>
              </div>
              <div className={style.display_div}>
                <h4>Email :</h4>
                <span>{email}</span>
              </div>
              <div className={style.display_div}>
                <h4>Text :</h4>
                <span>{text}</span>
              </div>
             
            </div>
          </main>
        </div>
      </main>
    </>
  );
};

export default Contect;
