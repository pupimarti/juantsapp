import React from "react";

import "./css.css";

export default function User(props) {

  var select = false;
  if(props.select !== null){
    if(props.select.user === props.user)
      select = true;
  }

  return (
    <div
      onClick={() => {
        props.onClick({user: props.user, picture:props.picture, verify:props.verify});
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
          <p>{props.user}</p>
        </div>
      <div className={select ? "new-direct-select true" : "new-direct-select"}>
          {select &&
            <div id="tick-mark"></div>
          }
      </div>
    </div>
  );
}
