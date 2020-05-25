import React from 'react';
import check from "img/check.svg";
import './css.css';

export default function Message(props) {

    const getHour = (time) => {
        const date = new Date(time);
        return date.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        });
      };

    return (
        <div className={props.own ? "content-chat-message own" : "content-chat-message"}>
            <div className={props.own ? "chat-message own" : "chat-message"}>
                <p className="message-chat">{props.message}</p>
                <p className="chat-message-time">
                {getHour(props.time)}
                {props.own && 
                <span>
                    <img
                    src={check}
                    alt={"check"}
                    className="chat-message-check"
                    />
                </span>}
                </p>
            </div>
        </div>
    )
}
