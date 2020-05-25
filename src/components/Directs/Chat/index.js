import React, { useState, useEffect } from "react";
import "./css.css";
import Comment from "components/InputChat";
import getChatUser from "components/services/getChatUser";
import sendMessage from "components/services/sendMessage";
import Loading from "components/Loading";
import laptop from "img/laptop.svg";
import search from "img/search.svg";
import clip from "img/clip.svg";
import check from "img/check.svg";

export default function Chat(props) {
  const [messages, setMessages] = useState(null);

  const getHour = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getDateString = (time) => {
    const date = new Date(time);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/"+ date.getFullYear();
  }

  const compareDate = (date_message, date) => {
    const date_msg = new Date(date_message);
    const date_origin = new Date(date);
    
    if (date_msg.getDate() !== date_origin.getDate()) {
      date = date_msg;
      return false;
    }
    return true;
  };

  const getMessages = () => {
    let arr_msg = [];
    if (messages) {
      for (let i = 0; i < messages.length; i++) {
        let date;
        if (i > 0) date = new Date(messages[i - 1].time);
        else date = new Date();
        if (!compareDate(messages[i].time, date))
          arr_msg.push(
            <div key={i + 564} className="content-chat-day">
              <p className="chat-day">{getDateString(messages[i].time)}</p>
            </div>
          );
        if (messages[i].own)
          arr_msg.push(
            <React.Fragment key={i + messages[i].time}>
              <div className="content-chat-message own">
                <div className="chat-message own">
                  <p className="message-chat">{messages[i].message}</p>
                  <p className="chat-message-time">
                    {getHour(messages[i].time)}
                    <span>
                      <img
                        src={check}
                        alt={"check"}
                        className="chat-message-check"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        else
          arr_msg.push(
            <React.Fragment key={i}>
              <div className="content-chat-message">
                <div></div>
                <div className="chat-message">
                  <p className="message-chat">{messages[i].message}</p>
                  <p className="chat-message-time">
                    {getHour(messages[i].time)}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
      }
    }
    return arr_msg;
  };

  useEffect(() => {
    if (props.direct !== null) {
      const arr_msg = getChatUser("default", props.direct.user, props.directs);
      if (arr_msg === "none") {
        props.addChat("default", props.direct.user);
        setMessages([]);
      } else setMessages(arr_msg);
    }
  }, [messages, props]);

  const handleSendMessage = (message) => {
    const chat = sendMessage(
      "default",
      props.direct.user,
      message,
      props.directs,
      props.setDirects
    );
    if (chat) setMessages(null);
  };

  if (props.direct === null) {
    return (
      <div className="content-chat pc">
        <div className="content-default">
          <div className="content-chat-default">
            <div className="content-chat-logo-default">
              <img
                className="chat-logo-default"
                src="https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg"
                alt="Direct"
              />
            </div>
            <p className="chat-title-default">Mantén tu telefono conectado</p>
            <p className="chat-desc-default">
              JuantsApp se conecta a tu teléfono para sincronizar los mensajes.
              Para reducir el consumo de tus datos, conecta tu teléfono a una
              red Wi-Fi.
            </p>
            <hr className="chat-line-default" />
            <p className="chat-desc-default">
              <span>
                <img
                  src={laptop}
                  alt="Laptop"
                  className="chat-icon-laptop-default"
                />
              </span>
              JuantsApp está disponible para Windows.
              <a className="chat-url-default" href="www.google.com">
                Obtenlo aquí.
              </a>
            </p>
          </div>
          <div className="chat-border-bottom"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="content-chat">
      <header className="content-header-chat">
        <div
          className="chat-back mobile"
          onClick={() => {
            setMessages(null);
            props.back(null);
          }}
        ></div>
        <div className="content-header-chat">
          <div className="header-chat">
            <div className="content-header-user">
              <img
                className="chat-user-img"
                src={props.direct.picture}
                alt="user-img"
              />
              <p className="chat-user-name">{props.direct.name}</p>
            </div>
            <div className="content-actions-header">
              <img src={search} alt="search" className="icon" />
              <img src={clip} alt="clip" className="icon" />
              <div className="menu">
                <div className="point"></div>
                <div className="point"></div>
                <div className="point"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="chat-content-messages">
        <div className="center-width">{getMessages()}</div>
      </div>
      {messages === null && <Loading />}
      <div className="chat-content-comment">
        <Comment send={handleSendMessage} message />
      </div>
    </div>
  );
}
