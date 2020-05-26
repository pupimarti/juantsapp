import React from "react";

import "./css.css";

export default function User(props) {

  return (
    <div
      onClick={() => {
        props.onClick({user: props.user, picture:props.picture, name:props.name});
      }}
      className="content-new-direct-user"
    >
      <div className="content-img-username">
        <img
          className="img-account"
          src={props.picture}
          alt="profile_picture"
        />
        </div>
      <div className="direct-user">
          <p>{props.name}</p>
        </div>
      <div className="new-direct-select">
      </div>
    </div>
  );
}
