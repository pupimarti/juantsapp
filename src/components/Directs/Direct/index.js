import React from "react";
import ReactTimeAgo from "react-time-ago";

import "./css.css";

export default function Direct(props) {
  return (
    <div
      onClick={() => {
        props.onClick({
            user: props.user,
            verify: props.verify,
            picture: props.picture
        });
      }}
      className={props.read ? "content-direct" : "content-direct unread"}
    >
      <div className="content-img-username">
          <img
            className="img-account"
            src={props.picture}
            alt="profile_picture"
          />
        
      </div>
      <div className="direct-message-time">
        <div className="direct-user">
          <p>{props.user}</p>
        </div>
        <p className="direct-message">
          {props.message.length > 30
          ? props.message.substring(0, 30) + "..."
          : props.message} •
          <span className="time-notif">
            {" "}
            {props.time && (
              <ReactTimeAgo
                date={new Date(props.time)}
                timeStyle="twitter"
                locale="es"
              />
            )}
          </span>
        </p>
      </div>
      <div className={props.read ? "invisible" : "direct-unread"}></div>
    </div>
  );
}
