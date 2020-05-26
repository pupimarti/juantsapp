import React from "react";
import Stat from 'components/Directs/Stat';
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
        <Stat title="Tu nombre" desc={props.user.name} />
        <div className="center-stat">
            <p className="info-stat">
                Este no es tu nombre de usuario ni un PIN. Este nombre será visible para tus contactos de JuantsApp.
            </p>
        </div>
        <Stat title="Info." desc={props.user.desc} />
      </div>
    </div>
  );
}
