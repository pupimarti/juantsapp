import React, { useContext } from "react";
import Stat from "components/Directs/Stat";
import Context from "components/Context/AppContext";
import camera from 'img/camera.svg';
import "./css.css";
import setUser from "components/services/setUser";

export default function Profile(props) {
  const { users, setUsers } = useContext(Context);

  const editName = (name) => {
    var edit_user = props.user;
    if (name) edit_user.name = name;
    return editUser(edit_user);
  };

  const editDesc = (desc) => {
    var edit_user = props.user;
    if (desc) edit_user.desc = desc;
    return editUser(edit_user);
  };

  const editUser = (user) => {
    return setUser(user, users, setUsers);
  };

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
        <div className="center-stat content-profile-img">
          <img
            src={props.user.picture}
            alt="profile-img"
            className="profile-img"
          />
          <div className="hover-img">
            <img src={camera} alt="camera" className="stat-camera-hover" />
            <p className="stat-text-hover">CAMBIAR FOTO DE PERFIL</p>
          </div>
        </div>
        <Stat edit={editName} title="Tu nombre" desc={props.user.name} />
        <div className="center-stat">
          <p className="info-stat">
            Este no es tu nombre de usuario ni un PIN. Este nombre será visible
            para tus contactos de JuantsApp.
          </p>
        </div>
        <Stat edit={editDesc} title="Info." desc={props.user.desc} />
      </div>
    </div>
  );
}
