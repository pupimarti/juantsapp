import React from "react";
import ReactTimeAgo from "react-time-ago";

import "./css.css";

export default function Direct(props) {

  const getClass = () => {
    let direct_class = "content-direct";
    if(!props.read) direct_class += " unread";
    if(props.viewDirect){
      if(props.viewDirect.user === props.user) direct_class += " select";
    }
    
    return direct_class;
  }

  return (
    <div
      onClick={() => {
        props.onClick({
          user: props.user,
          verify: props.verify,
          picture: props.picture,
          name: props.name
        });
      }}
      className={getClass()}
    >
      <div className="direct">
        <div className="content-img-username">
          <img
            className="img-account"
            src={props.picture}
            alt="profile_picture"
          />
        </div>
        <div>
          <div className="direct-user">
            <p>{props.name}</p>
          </div>
          <p className="direct-message">
            {props.message.length > 30
              ? props.message.substring(0, 30) + "..."
              : props.message}
          </p>
        </div>
      </div>
      <p className="time-notif">
              {" "}
              {props.time && (
                <ReactTimeAgo
                  date={new Date(props.time)}
                  timeStyle="twitter"
                  locale="es"
                />
              )}
            </p>
      <div className={props.read ? "invisible" : "direct-unread"}></div>
        <hr className="direct-line-bottom" />
    </div>
  );
}
