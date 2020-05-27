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
      <div className="box-profile-contact content-profile-info-user">
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
              desc="Sin archivos multimedia, enlaces ni documentos"
            />
        </div>
        <div className="box-profile-contact content-stat">
            <p className="center-stat only-action-text">Silenciar notificaciones</p>
            <hr/>
            <p className="center-stat only-action-text">Mensajes destacados</p>
        </div>
        <div className="box-profile-contact">
            <Stat
              title="Info. y nombre de usuario"
              desc={props.desc + " - " + props.user}
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
