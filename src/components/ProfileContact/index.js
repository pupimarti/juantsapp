import React from "react";
import Stat from "components/Directs/Stat";
import "./css.css";

export default function ProfileContact(props) {
  return (
    <div className="content-profile-contact">
      <header className="center-width content-profile-contact-header">
        <div onClick={() => props.back()} className="close">
          <div className="close-line"></div>
          <div className="close-line"></div>
        </div>
        <p className="profile-contact-header-text">Info. de contacto</p>
      </header>
      <div onClick={() => {props.setShowPicture({user: props.user, img: props.img})}} className="box-profile-contact content-profile-info-user">
        <img
          className="profile-contact-img"
          src={props.img}
          alt="profile-img"
        />
        <p className="profile-contact-name center-width">{props.name}</p>
      </div>
        <div className="box-profile-contact">
            <Stat
              title="Archivos, enlaces y documentos"
              content={<p className="no-multimedia">Sin archivos multimedia, enlaces ni documentos</p>}
            />
        </div>
        <div className="box-profile-contact content-stat">
            <p className="center-stat only-action only-action-text hr-bb">Silenciar notificaciones</p>
            <p className="center-stat only-action only-action-text">Mensajes destacados</p>
        </div>
        <div className="box-profile-contact">
            <Stat
              title="Info. y nombre de usuario"
              content={
                <React.Fragment>
                  <p className="only-action only-action-text hr-bb">{props.desc}</p>
              <p className="only-action only-action-text">{props.user}</p>
                </React.Fragment>
              }
            />
        </div>
        <div className="box-profile-contact content-stat">
            <p className="center-stat only-action-text">Bloquear</p>
        </div>
        <div className="box-profile-contact content-stat">
            <p className="center-stat only-action-text-red">Reportar contacto</p>
        </div>
        <div className="box-profile-contact content-stat">
            <p className="center-stat only-action-text-red">Eliminar chat</p>
        </div>
    </div>
  );
}
