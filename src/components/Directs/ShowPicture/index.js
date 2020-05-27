import React from "react";
import "./css.css";

export default function ShowPicture(props) {
  return (
    <div className="content-show-picture">
      <header className="show-picture-header center-width">
        <div className="show-picture-user">
          <img
            src={props.img}
            alt="profile"
            className="show-picture-img-profile-user"
          />
          <p className="show-picture-name">{props.user}</p>
        </div>
        <div onClick={() => props.setShowPicture(null)} className="close">
          <div className="close-line"></div>
          <div className="close-line"></div>
        </div>
      </header>
      <div className="content-picture-show-picture">
        <img src={props.img} alt="the-pic" className="show-picture-img" />
      </div>
    </div>
  );
}
