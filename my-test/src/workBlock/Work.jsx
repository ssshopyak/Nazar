import React from "react";
import "./Work.css";
import photo1 from "../img/3.png";
import photo2 from "../img/4.png";
import photo3 from "../img/5.png";
import photo4 from "../img/6.png";
import photo5 from "../img/7.png";
import photo6 from "../img/8.png";
export default function workBlock() {
  return (
    <div id="workBlock">
      <h2>РОБОТИ</h2>
      <p className="titleService">Дагестан</p>
      <p className="descriptionService">
        Буріння cвердловин на нафту, ця робота була виконана професіоналами за
        допомогою спеціальної техніки
      </p>
      <div className="photoBlock">
        <img src={photo1} className="photo" alt="workphoto" />
        <img src={photo2} className="photo" alt="workphoto" />
        <img src={photo3} className="photo" alt="workphoto" />
      </div>
      <p className="titleService">Крим</p>
      <p className="descriptionService">
        Буріння cвердловин на нафту та газ буровим комплексом УБВ-600 з
        використанням самохідного агрегату УПА50
      </p>
      <div className="photoBlock">
        <img src={photo4} className="photo" alt="workphoto" />
        <img src={photo5} className="photo" alt="workphoto" />
        <img src={photo6} className="photo" alt="workphoto" />
      </div>
    </div>
  );
}
