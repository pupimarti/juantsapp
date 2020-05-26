import React from "react";
import "./css.css";

export default function Profile(props) {
  return (
    <div className="content-new-chat">
      <header className="content-new-chat-header">
        <div className="new-chat-header">
          <div
            onClick={() => props.setProfile(false)}
            className="chat-back"
          ></div>
          <h5 className="new-chat-title-header">Perfil</h5>
        </div>
      </header>
      <div className="content-profile-stats">
        <div className="center-stat">
          <img
            src={props.user.picture}
            alt="profile-img"
            className="profile-img"
          />
        </div>
        <div className="content-stat">
          <div className="center-stat">
            <p className="title-stat">Tu nombre</p>
            <p className="stat">{props.user.name}</p>
          </div>
        </div>
        <div className="center-stat">
            <p className="info-stat">
                Este no es tu nombre de usuario ni un PIN. Este nombre será visible para tus contactos de JuantsApp.
            </p>
        </div>
        <div className="content-stat">
          <div className="center-stat">
            <p className="title-stat">Info.</p>
            <p className="stat">{props.user.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
